import Vue from 'vue';
import Modal from './index.vue';

let total = 1;
let index;
let modals = [];

const ModalFun = (options) => {
  if (Vue.prototype.$isServer) return;  //因为服务器渲染不存在dom
  options = options || {};
  const id = `moveModal_${total++}`;
  const userOnClose = options.onClose;  //这里必须变量接收一次
  options.onClose = () => {
    ModalFun.removeNode(id, userOnClose);  //把自身作为回调传入
  };

  const ModalConstructor = Vue.extend(Modal);  //继承
  index = new ModalConstructor({  //new一个实例
    data: options
  });
  index.id = id;
  index.$mount();  //如果Vue实例在实例化时没有收到el选项，则它处于“未挂载”状态，没有关联的DOM元素。可以使用vm.$mount()手动地挂载一个未挂载的实例。
  document.body.appendChild(index.$el);
  index.visible = true;
  modals.push(index);
  return index;  //这里返回实例，这样就可以直接在外部使用this.$notice.close();了
};

ModalFun.removeNode = (id, callback) => {
  let index = modals.findIndex((item) => {  //找到要删除节点的索引。//findIndex会返回符合匹配的第一个元素的索引
    return item.id === id;
  });
  let modal = modals[index];
  if (!modal) return;
  if (typeof callback === 'function') {  //执行回调
    callback(modal);
  }
  modals.splice(index, 1);  //删除数组中的节点
};

ModalFun.closeAll = function () {  //其实这个方法感觉没有设计的必要，本来就只返回了单个实例。需要全部删除的话，可以在父级创建一个数组，每次点击生成一个新实例的时候push进去，需要全部删除的时候for删除就行了。
  for (let i = modals.length - 1; i >= 0; i--) {
    modals[i].close();
  }
};

ModalFun.install = (Vue) => {  //install注册到原型链
  Vue.prototype.$moveModal = ModalFun;
};

export default ModalFun;
