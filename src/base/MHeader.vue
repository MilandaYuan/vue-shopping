<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont icon-fanhui" v-if="back" @click = "goBack"></i>
  </div>
</template>

<script>
  export default {
    name: "m-header",
    props:{
      back:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: black;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    i{
     position: absolute;
      left: 10px;
    }
  }
</style>
