<template>
  <div class="footer">
    <router-link to="/home">
      <div >
        <i class="iconfont" :class="{'icon-shouye1':!isA,'icon-ai-home':isA}"></i>
        <span>首页</span>
      </div>
    </router-link>
    <router-link to="/list">
      <div >
        <i class="iconfont icon-liebiaoyemian"></i>
        <span>列表</span>
      </div>
    </router-link>
    <router-link to="/collect">
      <div >
        <i class="iconfont icon-shoucang"></i>
        <span>购物车</span>
      </div>
    </router-link>
    <router-link to="/add">
      <div >
        <i class="iconfont icon-add"></i>
        <span>添加</span>
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name: "tab",
    data() {
      return {
        isA: false
      }
    },
    watch:{
      '$route':'toggle'
    },
    methods: {
      toggle() {
        this.isA = !this.isA;
      }
    }
  }
</script>

<style scoped lang="less">
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #ccc;
    a {
      flex: 1;
      div{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: grey;
      }


    }
    a.router-link-active div {
      color: black;
    }
  }
</style>
