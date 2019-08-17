<template>
  <aside id='sidebar'>
    <div class='sidebar-header'>
      <router-link :to="linkTo"><img src='../../assets/images/head_pic.jpeg' alt='head' class='head' /></router-link>
      <p>ZengNuo的博客</p>
    </div>
    <div class='sidebar-nav'>
      <ul>
        <li>
          <router-link to="/article">文章</router-link>
        </li>
        <li>
          <router-link to="/about">关于</router-link>
        </li>
      </ul>
    </div>
    <div class='sidebar-footer'></div>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  computed: {
    linkTo () {
      return this.$store.state.isLogined ? '/profile' : '/login'
    },
    isLogin () {
      return this.$store.state.isLogined
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import "../../assets/css/mixin.scss";

#sidebar {
  display: flex;
  flex: 0 0 18rem;
  width: 18rem;
  flex-direction: column;
  align-items: center;
  background-color: $bgc;
  color: #777;
  text-align: center;
  padding: 2rem 0 6rem 0;
  @media screen and (max-width: 600px) {
    flex: 0;
    padding: 1rem;
  }
  .sidebar-header {
    margin-top: 2rem;
    width: 100%;
    .head {
      height: 5rem;
      @include borderRadius(2.5rem);
      border: 2px solid #fff;
    }
    p {
      font-size: 12px;
      margin: 1rem;
    }
  }
  .sidebar-nav {
    padding: 1rem 0;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    width: 100%;
    @media screen and (max-width: 600px) {
      border: 0;
    }
    li {
      padding: .5rem;
      @media screen and (max-width: 600px) {
        display: inline;
      }
      a {
        font-size: 14px;
        color: #777;
      }
    }
  }
}
</style>
