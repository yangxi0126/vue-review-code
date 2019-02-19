<template>
  <div>
    <div>this is v-model</div>
    <div>
      <span>input</span>
      <div>
        <vInput v-model="inputValue" @input="childChange"></vInput>
        <span>{{inputValue}}</span>
        <!--相当于以下。给组件添加 v-model 属性时，默认会把 value 作为组件的属性，然后把 'input' 值作为给组件绑定事件时的事件名-->
        <!--<vInput :value="inputValue" @input="inputValue = arguments[0]"></vInput>-->
      </div>
    </div>
    <div>
      <span>checkbox</span>
      <div>
        <vCheck v-model="foo" @checkEvt="checkEvt"></vCheck>
        <!--给checkbox组件添加 v-model 属性时, 默认会把 checked 作为组件的属性-->
      </div>
    </div>
    <div>
      <span>radio</span>
      <div>
        <vRadio v-model="foo" @radioEvt="radioEvt" :values="radioArr" :name="'test'"></vRadio>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import vInput from './input.vue';
  import vCheck from './checkbox.vue';
  import vRadio from './radio.vue';

  export default {
    components: {
      vInput,
      vCheck,
      vRadio
    },
    data() {
      return {
        inputValue: 123,
        foo: 555,
        radioArr: [666, 555]
      }
    },
    methods: {
      childChange(event) {
        console.log(event);
      },
      checkEvt(event) {
        console.log(event);
      },
      radioEvt(event) {
        console.log(event, this.foo);
      }
    }
  }
</script>
