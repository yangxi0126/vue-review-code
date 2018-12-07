import Vue from 'vue';
import Notice from './notice.vue';

let total = 1;
let notice;
let notices = [];

const NotifyFun = (options) => {
  if (Vue.prototype.$isServer) return;  //因为服务器渲染不存在dom
  options = options || {};
  const id = `notice_${total++}`;
  const position = options.position || 'bottom-right';
  const userOnClose = options.onClose;  //这里必须变量接收一次
  options.onClose = () => {
    NotifyFun.removeNode(id, userOnClose);  //把自身作为回调传入
  };

  const NoticeConstructor = Vue.extend(Notice);  //继承
  notice = new NoticeConstructor({  //new一个实例
    data: options
  });
  notice.id = id;
  notice.$mount();  //如果Vue实例在实例化时没有收到el选项，则它处于“未挂载”状态，没有关联的DOM元素。可以使用vm.$mount()手动地挂载一个未挂载的实例。
  document.body.appendChild(notice.$el);
  notice.visible = true;
  // notice.dom = notice.$el;
  let verticalOffset = options.offset || 16;
  notices.filter((item) => {
    return item.position === position;  //按position上下左右分类
  }).forEach((item) => {
    verticalOffset += item.$el.offsetHeight + 16;  //每一类分别赋值高度。其实高度始终是加，只要转换top还是bottom就行了。
  });
  notice.verticalOffset = verticalOffset;
  notices.push(notice);
  return notice;  //这里返回实例，这样就可以直接在外部使用this.$notice.close();了
};

NotifyFun.removeNode = (id, callback) => {
  let index = notices.findIndex((item) => {  //找到要删除节点的索引。//findIndex会返回符合匹配的第一个元素的索引
    return item.id === id;
  });
  let notice = notices[index];
  if (!notice) return;
  if (typeof callback === 'function') {  //执行回调
    callback(notice);
  }
  notices.splice(index, 1);  //删除数组中的节点

  const position = notice.position;
  const removeHeight = notice.$el.offsetHeight;
  for (let i = index; i < notices.length; i++) {
    if (notices[i].position === position) {  //把同一类的重新计算位置
      notices[i].verticalOffset -= removeHeight + 16;
      notices[i].$el.style[notice.verticalProperty] = notices[i].verticalOffset + 'px';
    }
  }
};

NotifyFun.closeAll = function () {  //其实这个方法感觉没有设计的必要，本来就只返回了单个实例。需要全部删除的话，可以在父级创建一个数组，每次点击生成一个新实例的时候push进去，需要全部删除的时候for删除就行了。
  for (let i = notices.length - 1; i >= 0; i--) {
    notices[i].close();
  }
};

NotifyFun.install = (Vue) => {  //install注册到原型链
  Vue.prototype.$notice = NotifyFun;
};

// if (typeof window !== 'undefined' && window.Vue) {
//   NotifyFun.install(window.Vue);  //TODO 这句话有什么用
// }

export default NotifyFun;
