<template>
  <div class="comment-list">
    <ul class="list">
      <li class="item"
          v-for="(item, index) in allLists">
        <div class="image">
          <img :src="item.image"/>
        </div>
        <div class="content">
          <div class="bar">
            <div class="left">
              <span>{{item.NickName}}</span>
              <span class="time">
                <i class="iconfont">&#xe613;</i>
                <span>{{item.CreateTime}}</span>
              </span>
            </div>
            <div class="right">
              <span class="items"><i class="iconfont"
                                     @click="commentEvent(item,'add')">&#xe64a;</i>({{item.SupportNum}})</span>
              <span class="items"><i class="iconfont"
                                     @click="commentEvent(item,'reduce')">&#xe600;</i>({{item.OppositionNum}})</span>
            </div>
          </div>
          <div class="comment">{{item.CommentContent}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    inject: ['commentEvt'],
    props: {
      list: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        isClick: false
//        allLists: []
      }
    },
    // 父组件改变props, 子组件如果直接使用props, 会触发子组件更新
    // 父组件改变props, 子组件如果将props放进data中再使用, 不会触发子组件更新
    // 父组件改变props, 子组件如果将props放进computed中再使用, 会触发子组件更新(watch也能达到同样的效果, 参考被注释的代码)
    // data, props和computed的变化都会触发组件更新
    computed: {
      allLists() {
        let listArr = [];
        this.list.map((item, index) => {
          if (!item.image) {
            item.image = require('./user.png');
          }
          listArr.push(item);
        });
        return listArr;
      }
    },
//    watch: {
//      list() {
//        this.refreshList();
//      }
//    },
    methods: {
//      refreshList() {
//        let listArr = [];
//        this.list.map((item, index) => {
//          if (!item.image) {
//            item.image = require('./user.png');
//          }
//          listArr.push(item);
//        });
//        this.allLists = listArr;
//      },
      commentEvent(item, type) {
        if (!this.isClick) {
          this.commentEvt(item, type);
        }
        this.isClick = true;
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "font.css";

  .comment-list {
    padding: 15px;
    .list {
      list-style: none;
      padding: 0;
      margin: 0;
      .item {
        padding: 5px 0;
        margin: 0;
        margin-top: -1px;
        border: 1px solid #e8ecf4;
        border-left: none;
        border-right: none;
        display: block;
        &:after {
          width: 0;
          height: 0;
          overflow: hidden;
          display: block;
          content: "";
          clear: both;
        }
        .image {
          float: left;
          width: 55px;
          img {
            width: 100%;
          }
        }
        .content {
          padding-left: 65px;
          box-sizing: border-box;
          .bar {
            height: 20px;
            font-size: 12px;
            &:after {
              width: 0;
              height: 0;
              overflow: hidden;
              display: block;
              content: "";
              clear: both;
            }
            .left {
              float: left;
              .time {
                margin-left: 8px;
              }
            }
            .right {
              color: #337ab7;
              float: right;
              .items {
                margin-left: 10px;
                .iconfont {
                  cursor: pointer;
                }
              }
            }
          }
          .comment {
            background-color: #f0f8ff;
            padding: 8px 12px;
            font-size: 12px;
            margin: 5px 0;
            text-align: left;
            border: 1px solid #e8ecf4;
          }
        }
      }
    }
  }
</style>
