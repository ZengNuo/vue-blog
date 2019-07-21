<template>
  <div id='index'>
    <side-bar></side-bar>
    <div class='content'>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sideBar from '../components/common/sidebar'

export default {
  name: 'index',
  components: {
    sideBar
  }
}
</script>

<style lang="scss" type="text/css">
@import "../assets/css/mixin.scss";

#index {
  display: flex;
  height: 100%;
  background-color: $bgc;
  box-sizing: border-box;
  .content {
    flex: 1 1 auto;
    padding: 2rem 2rem 2rem 0;
    height: 100vh;
    overflow-y: auto;
  }
}
</style>
