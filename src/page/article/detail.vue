<template>
  <div id='article-detail'>
    <div class='wrap'>
      <div class='article'>
        <div class='title'>
          <h3>{{article.title}}</h3>
        </div>
        <div class='time'>
          <p>于 {{article.createdTime|dateFormatter}} 发布</p>
        </div>
        <div class='text'>
          <mavon-editor
            class='md'
            :value='article.text'
            :subfield='prop.subfield'
            :defaultOpen='prop.defaultOpen'
            :toolbarsFlag='prop.toolbarsFlag'
            :editable='prop.editable'
            :codeStyle='prop.codeStyle'
            :scrollStyle='prop.scrollStyle'
            :boxShadow='prop.boxShadow'
            :ishljs='prop.ishljs'
          ></mavon-editor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import sideBar from '../../components/common/sidebar'

export default {
  name: 'article-detail',
  components: {
    sideBar
  },
  data: function () {
    return {
      article: {},
      comment: {}
    }
  },
  computed: {
    prop () {
      let data = {
        subfield: false,
        defaultOpen: 'preview',
        editable: false,
        toolbarsFlag: false,
        codeStyle: 'vs2015',
        scrollStyle: true,
        boxShadow: false,
        ishljs: true
      }
      return data
    }
  },
  created () {
    this.getArticle()
    this.getComment()
  },
  methods: {
    getArticle () {
      axios.get('/api/article?id=' + this.$route.query.id).then(res => {
        let json = res.data
        this.article = json.data
      })
    },
    getComment () {
      axios.get('/api/comment/list?id=' + this.$route.query.id).then(res => {
        let json = res.data
        this.comment = json.data
      })
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import "../../assets/css/mixin.scss";

#article-detail {
  .wrap {
    background-color: #fff;
    padding: 2.5rem;
    @media screen and (max-width: 600px) {
      padding: 1.5rem;
      text-align: center;
    }
    .article {
      .title {
        h3 {
          font-size: 26px;
        }
      }
      .time {
        margin: 1rem 0 1.5rem 0.5rem;
        p {
          font-size: 14px;
          @include sc(14px, #999);
        }
      }
    }
  }
}
</style>
