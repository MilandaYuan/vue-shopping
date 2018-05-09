<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="fadeIn">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab';
  import * as Types from './store/mutations-type'

  export default {
    name: 'App',
    components: {
      Tab
    },
  }
</script>

<style>
  @import 'pretty-checkbox/dist/pretty-checkbox.css';
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }


  .content {
    position: fixed;
    top: 40px;
    bottom: 50px;
    overflow: auto;
    width: 100%;
  }
  .fadeIn-enter{
    opacity: 0;
  }
  .fadeIn-enter-active{
    transition: all 0.3s linear;
  }
  .fadeIn-leave-active{
    transition: all 0.3s linear;
    opacity: 0;
  }
.text-input{
  border:1px solid #ccc;
  border-radius: 2px;
}
  .button{
    color: white;
    background: #D6A841;
    padding: 3px 6px;
    border:none;
  }

</style>
