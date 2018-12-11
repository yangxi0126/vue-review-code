<template>
  <div class="main">
    <h4 class="title">欢迎您发表评论</h4>
    <div class="content">
      <h5 class="tips">请勿发表与本片无关的主题，评论需要审核</h5>
      <textarea class="comment"
                placeholder="说点什么吧..."
                v-model="content"
                @input="contentChange"></textarea>
      <div class="words">还能输入<span class="red">{{total - content.length}}</span>/200</div>
      <button class="submit" @click="submit">发表</button>
    </div>
    <List :list="list"></List>
  </div>
</template>

<script type="text/ecmascript-6">
  import List from './commentList.vue';

  export default {
    components: {
      List
    },
    provide() {
      return {
        commentEvt: this.comment
      }
    },
    props: {
      list: {
        type: [Object, Array],
        default: []
      }
    },
    data() {
      return {
        content: '',
        total: 200
      }
    },
    methods: {
      contentChange() {
        if (this.content.length > 200) {
          this.content = this.content.substr(0, 200);
        }
      },
      submit() {
        this.$emit('submitEvt', {type: 'submit'});
      },
      comment(item, type) {
        this.$emit('commentEvt', {item, type});
      }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    width: 700px;
    margin: 0 auto;
    border: 1px solid #337ab7;
    border-radius: 10px;
    box-sizing: border-box;
    .title {
      text-align: left;
      margin: 0;
      margin-top: -1px;
      padding: 15px;
      background-color: #337ab7;
      color: #fff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .content {
      padding: 15px;
      &:after {
        width: 0;
        height: 0;
        overflow: hidden;
        display: block;
        content: "";
        clear: both;
      }
      .tips {
        text-align: left;
        margin: 0;
        color: #656565;
      }
      .comment {
        width: 100%;
        margin-top: 10px;
        height: 100px;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #555;
        background-color: #fff;
        background-image: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
        transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
        box-sizing: border-box;
        &:focus {
          border-color: #66afe9;
          outline: 0;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
        }
      }
      .words {
        text-align: right;
        font-size: 12px;
        .red {
          color: #ff0000;
        }
      }
      .submit {
        display: block;
        float: right;
        padding: 4px 8px;
        margin-top: 5px;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        user-select: none;
        background-image: none;
        border: 1px solid #2e6da4;
        border-radius: 4px;
        color: #fff;
        background-color: #337ab7;
        outline: none;
        &:active {
          color: #fff;
          background-color: #286090;
          border-color: #204d74;
        }
      }
    }
  }
</style>
