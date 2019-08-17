<template>
  <div id='login'>
    <div class='wrap'>
      <div class='login-form'>
        <div class='title'>
          <h3>登录</h3>
        </div>
        <div class="message">
          <p>{{message}}</p>
        </div>
        <form>
          <input v-model='username' type='text' class='username' placeholder='用户名' required />
          <input v-model='password' type='password' class='password' placeholder='密码' required />
          <input @click.prevent='login' id='button_login' type='submit' value='登录' />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import sideBar from '../../components/common/sidebar'

export default {
  name: 'login',
  components: {
    sideBar
  },
  data: function () {
    return {
      isLogin: false,
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    login () {
      axios.post('/api/user/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        let json = res.data
        if (json.status === 1) {
          this.message = ''
          this.$store.dispatch('login', json.token)
          this.$router.push('/')
        } else {
          this.message = json.message
        }
      })
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import "../../assets/css/mixin.scss";

#login {
  @include wh(100%, 100%);
  .wrap {
    @include wh(100%, 100%);
    .login-form {
      background-color: #fff;
      width: 20rem;
      margin: 0 auto;
      position: relative;
      top: 30%;
      padding: 0 2rem 2rem 2rem;
      border: 1px solid #ddd;
      @include borderRadius(5px);
      box-shadow: 1px 1px 3px #aaaaaa;
      .title {
        text-align: center;
        padding: 1rem 0;
        h3 {
          @include sc(20px, #555);
          font-weight: normal;
        }
      }
      .message {
        p {
          padding-bottom: 1rem;
          text-align: center;
          @include sc(14px, #ff5555);
        }
      }
      form {
        input {
          display: block;
          margin: 0 auto;
          height: 28px;
          @include font(14px, 28px);
          margin-bottom: 1rem;
          padding-left: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 2px;
        }
        #button_login {
          background-color: #2687fb;
          color: #fff;
          height: 30px;
          width: 4rem;
          @include font(12px, 28px);
          border: 1px solid #177ffb;
          @include borderRadius(2px);
          padding: 0;
        }
      }
    }
  }
}
</style>
