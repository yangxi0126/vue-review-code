<template>
  <div>
    <Comment :list="list"
             @submitEvt="submitEvt"
             @commentEvt="commentEvt"></Comment>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  import Comment from '../../components/comment/comment.vue';

  export default {
    components: {
      Comment
    },
    mounted() {
      this.getComment();
    },
    data() {
      return {
        list: []
      }
    },
    methods: {
      getComment() {
        let that = this;
        axios({
          method: 'get',
          url: 'http://localhost:8080/static/json/comment.json',
        }).then((res) => {
          that.list = res.data;
        });
      },
      submitEvt(val) {
        console.log(val);
      },
      commentEvt(val) {
        console.log(val)
      }
    }
  }
</script>

