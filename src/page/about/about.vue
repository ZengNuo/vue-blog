<template>
  <div id='about_me'>
    <div class='wrap'>
      <div class='title'>
        <h3>关于</h3>
      </div>
      <div class='intro'>
        <p>{{profile.about}}</p>
      </div>
      <div class='subtitle'>
        <h3>我</h3>
      </div>
      <div class='profile'>
        <p>{{profile.introduction}}</p>
      </div>
      <!-- <div class='subtitle'>
          <h3>共有 1 条留言</h3>
        </div>
        <div class='message_box'>
          <div class='message'>
            <div class='name'>
              <p></p>
            </div>
            <div class='text'>
              <p></p>
            </div>
            <div class='time'>
              <p></p>
            </div>
          </div>
      </div>-->
      <div class='subtitle'>
        <h3>留言</h3>
      </div>
      <div class='message_form'>
        <form action>
          <input type='text' placeholder='称呼' required />
          <input type='text' placeholder='邮箱' required />
          <textarea name='text' id='text' placeholder='请输入你的留言内容' required></textarea>
          <input id='button_submit' type='submit' value='提交留言' />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import sideBar from '../../components/common/sidebar'

export default {
  name: 'about_me',
  components: {
    sideBar
  },
  data: function () {
    return {
      profile: {},
      messages: ''
    }
  },
  created () {
    this.getProfile()
    this.getMessages()
  },
  methods: {
    getProfile () {
      axios.get('/api/user/profile').then(res => {
        const json = res.data
        if (json.status === 1) {
          this.profile = json.data
        }
      })
    },
    getMessages () {
      axios.get('/api/message/list').then(res => {
        const json = res.data
        if (json.status === 1) {
          this.messages = json.data
        }
      })
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import "../../assets/css/mixin.scss";

#about_me {
  .wrap {
    background-color: #fff;
    padding: 2.5rem;
    .title {
      h3 {
        @include sc(26px, #444);
        font-weight: normal;
      }
    }
    .subtitle {
      padding-top: 2rem;
      h3 {
        @include sc(20px, #444);
        font-weight: normal;
      }
    }
    .intro {
      padding: 2.5rem 0;
      border-bottom: 1px solid #eee;
      p {
        @include sc(14px, #555);
      }
    }
    .profile {
      padding: 1.5rem 0 2.5rem 0;
      border-bottom: 1px solid #eee;
      p {
        @include sc(14px, #555);
      }
    }
    .message_box {
      padding: 1.5rem 0;
      border-bottom: 1px solid #eee;
      .message {
        color: #555;
        line-height: 26px;
        padding-bottom: 1rem;
        .name {
          font-size: 16px;
          font-weight: bold;
        }
        .text {
          font-size: 14px;
        }
        .time {
          @include sc(1px, #999);
        }
      }
    }
    .message_form {
      padding: 1.5rem 0 0.5rem 0;
      form {
        display: flex;
        flex-direction: column;
        padding-right: 1rem;
      }
      input {
        height: 28px;
        @include font(14px, 28px);
        margin-bottom: 1.5rem;
        padding-left: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 2px;
      }
      #text {
        resize: none;
        height: 6rem;
        padding-left: 0.5rem;
        border: 1px solid #ccc;
        @include font(14px, 28px);
        overflow-y: auto;
      }
      #button_submit {
        background-color: #2687fb;
        color: #fff;
        height: 36px;
        width: 10rem;
        @include font(12px, 28px);
        margin: 0 auto;
        margin-top: 3rem;
        border: 1px solid #177ffb;
        @include borderRadius(2px);
      }
      #button_submit:hover {
        background-color: #267bfb;
        border: 1px solid #77b4ff;
      }
    }
  }
}
</style>
