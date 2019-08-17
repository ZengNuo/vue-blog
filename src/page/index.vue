<template>
  <div id='index'>
    <side-bar></side-bar>
    <main class='content'>
      <router-view></router-view>
    </main>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import sideBar from '../components/common/sidebar'
import footBar from '../components/common/footer'

export default {
  name: 'index',
  components: {
    sideBar,
    footBar
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
  @media screen and (max-width: 600px) {
    flex-direction: column;
    overflow-y: auto;
    height: auto;
    padding-right: 0;
  }
  .content {
    display: block;
    flex: 1 1 auto;
    padding: 2rem 2rem 2rem 0;
    height: 100vh;
    overflow-y: auto;
    @media screen and (max-width: 600px) {
      height: auto;
      padding: 0;
    }
  }
}
</style>
