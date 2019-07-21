<template>
  <div id='profile'>
    <div class='wrap'>
      <div class='subtitle'>
        <h3>网站信息</h3>
      </div>
      <div class="website-info">
        <div class="info">
          <p>网站标题：</p>
          <input v-model="user.title" type="text" name="title" value="title" placeholder="请输入网站标题" required />
        </div>
        <div class="info">
          <p>网站介绍：</p>
          <textarea v-model="user.about" type="text" name="about" value="about" placeholder="请输入网站介绍" required />
        </div>
      </div>
      <div class='subtitle'>
        <h3>个人信息</h3>
      </div>
      <div class="my-info">
        <div class="info">
          <p>名字：</p>
          <input v-model="user.name" type="text" name="name" value="name" placeholder="请输入名字" required />
        </div>
        <div class="info">
          <p>自我介绍：</p>
          <textarea v-model="user.introduction" type="text" name="introduction" value="introduction" placeholder="请输入自我介绍" required />
        </div>
      </div>
      <div class="save">
        <p>{{message}}</p>
        <input @click.prevent="logout" class="button_submit" type="button" value="注销登录" />
        <input @click.prevent="updateProfile" class="button_submit" type="button" value="保存" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../../store'
import sideBar from '../../components/common/sidebar'

export default {
  name: 'profile',
  components: {
    sideBar
  },
  data: function () {
    return {
      user: {},
      message: ''
    }
  },
  created () {
    this.getProfile()
  },
  methods: {
    getProfile () {
      axios.get('/api/user/profile').then(res => {
        let json = res.data
        this.user = json.data
      })
    },
    updateProfile () {
      axios.put('/api/user/profile', this.user, {
        headers: {
          Authorization: store.state.token
        }
      }).then(res => {
        let json = res.data
        this.message = json.message
      })
    },
    logout () {
      this.user = {}
      store.dispatch('logout')
      this.$router.replace({ path: '/login' })
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import "../../assets/css/mixin.scss";

#profile {
  .wrap {
    background-color: #fff;
    padding: 2.5rem;
    .subtitle {
      h3 {
        @include sc(20px, #444);
        font-weight: normal;
      }
    }
    .website-info {
      padding: 1rem;
    }
    .my-info{
      padding: 1rem;
    }
    .info {
      padding: .5rem 0;
      p {
        padding-bottom: .8rem;
      }
      input {
        width: 100%;
        @include font(14px, 28px);
        padding-left: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 2px;
      }
      textarea {
        width: 100%;
        resize: none;
        height: 6rem;
        padding-left: 0.5rem;
        border: 1px solid #ccc;
        @include font(14px, 28px);
      }
    }
    .save {
      text-align: center;
      p {
        padding-bottom: 1rem;
        @include sc(14px, #ff0000);
      }
    }
    .button_submit {
      background-color: #2687fb;
      color: #fff;
      height: 36px;
      width: 8rem;
      @include font(12px, 28px);
      margin: 0 auto;
      border: 1px solid #177ffb;
      @include borderRadius(2px);
    }
    .button_submit:hover {
      background-color: #267bfb;
      border: 1px solid #77b4ff;
    }
  }
}
</style>
