import Notification from './Notification.vue';

let $vm;
const instances = [];
let number = 1;

const Notify = {
  install(Vue) {
    if ($vm) return;
    const PluginConstructor = Vue.extend(Notification);

    let notify = {
      show(options) {
        $vm = new PluginConstructor({
          el: document.createElement('div'),
          propsData: options
        });
        $vm.$el.id = `notification_${number++}`;
        let verticalOffset = 16;
        instances.forEach((item) => {
          verticalOffset += item.$el.offsetHeight + 16;
        });

        instances.push($vm);
        $vm.text = options.text;
        $vm.isShow = true;
        $vm.verticalOffset = verticalOffset;
        document.body.appendChild($vm.$el);

        if (options.autoClose !== false) {
          setTimeout(() => {
            this.hide();
          }, options.closeTime ? options.closeTime : 3000);
        }
      },
      hide() {
        $vm.isShow = false;
        $vm.$destroy();
        document.body.removeChild($vm.$el);
      }
    };

    Vue.prototype.$notify = notify;
  }
};

export default Notify;
