<template>
  <div id='sidebar'>
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
    <div class='sidebar-footer'>
      <p>
        <strong>ZengNuo</strong> &copy; 2019 All Rights Reserved.
      </p>
      <p>
        Theme Design by
        <a href='https://github.com/Showfom/Affinity'>Affinity</a>.
      </p>
    </div>
  </div>
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
  flex-direction: column;
  align-items: center;
  background-color: $bgc;
  color: #777;
  text-align: center;
  padding: 2rem 1rem 0rem 1rem;
  .sidebar-header {
    margin-top: 2rem;
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
    padding: 1.5rem 0;
    border-top: 1px solid #e1e1e1;
    border-bottom: 1px solid #e1e1e1;
    width: 100%;
    li {
      padding: .5rem;
      a {
        font-size: 14px;
        color: #777;
      }
    }
  }
  .sidebar-footer {
    position: absolute;
    bottom: 0rem;
    color: #aaa;
    padding: 2rem;
    p {
      font-size: 12px;
      line-height: 20px;
      a {
        color: #777;
        :hover {
          color: #aaa;
        }
      }
    }
  }
}
</style>
