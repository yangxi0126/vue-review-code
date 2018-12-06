/*代码会先进这个js，再进入组件vue文件*/
import Notification from './Notification.vue';

const instances = [];
let number = 1;
const Notify = {
  install(Vue) {
    const PluginConstructor = Vue.extend(Notification);

    let notify = {
      show(options) {
        const {
          autoClose,
          ...rest  //rest必须放在最后
        } = options;

        let $vm = new PluginConstructor({  //这里一定不能把$vm定义到全局，不然会在删除节点的时候引起混乱
          el: document.createElement('div'),
          propsData: {
            ...rest
          },
          data: {
            autoClose  //这里写的话，由于是继承关系，就相当于直接在
          }
        });
        $vm.$el.id = `notification_${number++}`;
        let verticalOffset = 16;
        instances.forEach((item) => {
          verticalOffset += item.$el.offsetHeight + 16;
        });

        $vm.$on('close', (data) => {
          this.hide($vm);
        });

        instances.push($vm);
        $vm.verticalOffset = verticalOffset;
        document.body.appendChild($vm.$el);
      },
      hide(vm) {
        vm.isShow = false;
        this.removeInstance(vm);
        document.body.removeChild(vm.$el);
        vm.$destroy();
      },
      removeInstance(vm) {  //删除数组中的元素
        if (!vm) return;
        const index = instances.findIndex((item) => {  //findIndex会返回符合匹配的第一个元素的索引
          return item.$el.id === vm.$el.id;
        });
        instances.splice(index, 1);
        for (let i = index; i < instances.length; i++) {  //后面的元素高度依次降低
          instances[i].verticalOffset = instances[i].verticalOffset - instances[i].$el.offsetHeight - 16;
        }
      }
    };

    Vue.prototype.$notify = notify;
  }
};

export default Notify;
