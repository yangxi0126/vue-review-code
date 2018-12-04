import LoadingComponent from './loading.vue';  //第一步 引入组件

let $vm;  //实例

const loadingPlugin = {  //第二步 install
  install(Vue) {  //接收两个参数，一个Vue，一个是插件选项
    if ($vm) return;
    const Plugin = Vue.extend(LoadingComponent);  //2.1 extend
    $vm = new Plugin({  //2.2 构造器创建实例
      el: document.createElement('div')
    });
    document.body.appendChild($vm.$el);  //2.3 实例添加到document

    $vm.show = false;

    let loading = {  //2.4 实例添加属性和方法
      show(options) {
        $vm.show = true;
        $vm.text = options.text;
      },
      hide() {
        $vm.show = false;
        $vm.$destroy();
        document.body.removeChild($vm.$el);
      }
    };

    Vue.prototype.$loading = loading;  //2.5 挂载到原型
  }
};

export default loadingPlugin;  //第三步 导出
