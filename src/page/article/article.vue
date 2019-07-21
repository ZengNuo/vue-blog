<template>
  <div id='home'>
    <div class='wrap'>
      <div class="create">
        <input v-if="isLogin" @click.prevent="createArticle" type='button' class="button_submit" value='新建文章' />
      </div>
      <div class='content-cards'>
        <div class='card' v-for='(article, index) in articles[currentPage - 1]' :key='index'>
          <div class='card-content'>
            <div class='card-header'>
              <a href @click.prevent="getDetail(article._id)">
                <h3>{{article.title}}</h3>
              </a>
            </div>
            <div class='card-body'>
              <p>{{article.introduction}}</p>
            </div>
            <div class='card-footer'>
              <span>{{article.createdTime|dateFormatter}}</span>
              <span>{{article.type}}</span>
              <div class="operation" v-if="display">
                <a href @click.prevent="editArticle(article._id)">编辑</a>
                <a href @click.prevent="deleteArticle(article._id)">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='pager'>
        <input v-if="prev" @click.prevent="prevPage" type='button' class="pager-button" value='上一页' />
        <input v-if="next" @click.prevent="nextPage" type='button' class="pager-button" value='下一页'  />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../../store'
import sideBar from '../../components/common/sidebar'

export default {
  name: 'home',
  components: {
    sideBar
  },
  data: function () {
    return {
      articles: [],
      currentPage: 1,
      pageCount: 1
    }
  },
  computed: {
    display () {
      return this.$store.state.isLogined
    },
    prev () {
      return this.currentPage > 1
    },
    next () {
      return this.currentPage < this.pageCount
    },
    isLogin () {
      return this.$store.state.isLogined
    }
  },
  created () {
    this.getArticles()
  },
  methods: {
    getArticles () {
      axios.get('/api/article/list?page=' + this.currentPage).then(res => {
        let json = res.data
        if (json.status === 1) {
          this.pageCount = json.pageCount
          this.articles.push(json.data)
        }
      })
    },
    getDetail (id) {
      this.$router.push({
        path: `/article/detail?id=${id}`
      })
    },
    createArticle () {
      this.$router.push({
        path: '/article/create'
      })
    },
    editArticle (id) {
      this.$router.push({
        path: `/article/edit?id=${id}`
      })
    },
    deleteArticle (id) {
      axios.delete(`/api/article?id=${id}`, {
        headers: {
          Authorization: store.state.token
        }
      }).then(res => {
        let json = res.data
        if (json.status === 1) {
          this.$router.go(0)
        }
      })
    },
    prevPage () {
      this.currentPage--
      if (this.articles[this.currentPage]) {
        this.$el.parentElement.scrollTop = 0
      } else {
        axios.get('/api/article/list?page=' + this.currentPage).then(res => {
          let json = res.data
          if (json.status === 1) {
            this.$el.parentElement.scrollTop = 0
            this.pageCount = json.pageCount
            this.articles.push(json.data)
          }
        })
      }
    },
    nextPage () {
      this.currentPage++
      if (this.articles[this.currentPage]) {
        this.$el.parentElement.scrollTop = 0
      } else {
        axios.get('/api/article/list?page=' + this.currentPage).then(res => {
          let json = res.data
          if (json.status === 1) {
            this.$el.parentElement.scrollTop = 0
            this.pageCount = json.pageCount
            this.articles.push(json.data)
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import "../../assets/css/mixin.scss";

#home {
  .wrap {
    .create {
      display: flex;
      justify-content: flex-start;
      .button_submit {
        background-color: #2687fb;
        color: #fff;
        height: 36px;
        width: 8rem;
        margin-left: 1rem;
        margin-bottom: .5rem;
        @include font(12px, 28px);
        border: 1px solid #177ffb;
        @include borderRadius(2px);
      }
      .button_submit:hover {
        background-color: #267bfb;
        border: 1px solid #77b4ff;
      }
    }
    .content-cards {
      display: flex;
      flex-wrap: wrap;
      padding-bottom: 1rem;
      .card {
        flex: 0 0 33.3333%;
        max-width: 33.3333%;
        padding: 0.75rem;
        .card-content {
          height: 18rem;
          border: 1px solid #eee;
          background-color: #fff;
          padding: 2rem;
          .card-header {
            height: 20%;
            h3 {
              color: #111;
              font-size: 20px;
            }
          }
          .card-body {
            height: 70%;
            padding: 1rem 0 1rem 0;
            line-height: 1.5rem;
            @include sc(14px, #888);
          }
          .card-footer {
            display: flex;
            justify-content: space-between;
            height: 1.5rem;
            span {
              line-height: 1.5rem;
              font-size: 12px;
              color: #888;
            }
            .operation {
              a {
                @include sc(12px, #267bfb);
                padding: 0 .5rem;
              }
            }
          }
        }
      }
    }
    .pager {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      .pager-button {
        background-color: #2687fb;
        color: #fff;
        height: 36px;
        width: 8rem;
        @include font(12px, 28px);
        margin: 0 2rem;
        border: 1px solid #177ffb;
        @include borderRadius(2px);
      }
      .pager-button:hover {
        background-color: #267bfb;
        border: 1px solid #77b4ff;
      }
    }
  }
}
</style>
