<template>
  <div class="footer">
    <router-link v-for="item in paths" :to="{path:item.path}" :key="item.name">
      <i class="iconfont" :class="[item.isA?item.classA:item.classB]"></i>
      <span>{{item.name}}</span>
    </router-link>


  </div>
</template>

<script>
  const paths = [
    {
      path: '/home',
      classA: 'icon-ai-home',
      classB: 'icon-shouye1',
      isA: false,
      name: '首页'
    },
    {
      path: '/list',
      classA: 'icon-shuxingliebiaoxiangqing2',
      classB: 'icon-shuxingliebiaoxiangqing',
      isA: false,
      name: '列表页'
    },
    {
      path: '/collect',
      classA: 'icon-gouwuche-copy',
      classB: 'icon-gouwuche3',
      isA: false,
      name: '购物车'
    },
    {
      path: '/add',
      classA: 'icon-tianjia1',
      classB: 'icon-tianjia',
      isA: false,
      name: '添加'
    }
  ]
  export default {
    name: "tab",
    data() {
      return {
        paths
      }
    },
    watch: {
      '$route': 'toggle'
    },
    methods: {
      toggle() {
        let curPath = this.$route.path;
        this.paths.map(item => {
          item.isA =curPath === item.path
        })
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
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: grey;
      i{
        font-size: 22px;
      }
      span{
        font-size: 13px;
      }

    }
    a.router-link-active {
      color: black;
    }
  }
</style>
