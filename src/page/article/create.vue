<template>
  <div id='article-create'>
    <div class='wrap'>
      <div class='title'>
        <h3>新建文章</h3>
      </div>
      <div class="article">
        <div class="article-info">
          <p>标题：</p>
          <input v-model="article.title" name="title" type="text" placeholder="标题" spellcheck="false" />
          <p>文章类型：</p>
          <input v-model="article.type" name="type" type="text" placeholder="文章类型" spellcheck="false" />
          <p>文章介绍：</p>
          <textarea v-model="article.introduction" name="introduction" type="text" placeholder="文章介绍" spellcheck="false" />
        </div>
        <div class="article-text">
          <mavon-editor
            class='md'
            v-model='article.text'
            :subfield='prop.subfield'
            :defaultOpen='prop.defaultOpen'
            :toolbarsFlag='prop.toolbarsFlag'
            :editable='prop.editable'
            :codeStyle='prop.codeStyle'
            :scrollStyle='prop.scrollStyle'
            :boxShadow='prop.boxShadow'
            :ishljs='prop.ishljs'
            :shortCut='prop.shortCut'
            :autofocus='prop.autofocus'
            :toolbars='prop.toolbars'
          ></mavon-editor>
        </div>
      </div>
      <div class="save">
        <input @click.prevent="createArticle" class="button_submit" type="button" value="保存" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import store from '../../store'
import sideBar from '../../components/common/sidebar'

export default {
  name: 'article-create',
  components: {
    sideBar
  },
  data: function () {
    return {
      article: {
        title: '',
        introduction: '',
        type: '',
        text: ''
      }
    }
  },
  computed: {
    prop () {
      let data = {
        subfield: true,
        defaultOpen: 'preview',
        editable: true,
        toolbarsFlag: true,
        codeStyle: 'vs2015',
        scrollStyle: true,
        boxShadow: true,
        ishljs: true,
        shortCut: false,
        autofocus: false,
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: false, // 上角标
          subscript: false, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: false, // 全屏编辑
          readmodel: false, // 沉浸式阅读
          htmlcode: false, // 展示html源码
          help: false, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: true, // 清空
          save: false, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: false, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: false, // 单双栏模式
          preview: false // 预览
        }
      }
      return data
    }
  },
  methods: {
    createArticle () {
      axios.post('/api/article', this.article, {
        headers: {
          Authorization: store.state.token
        }
      }).then(res => {
        let json = res.data
        if (json.status === 1) {
          this.$router.push({
            path: '/article'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" type="text/css">
@import "../../assets/css/mixin.scss";

#article-create {
  .wrap {
    background-color: #fff;
    padding: 2.5rem;
    .title {
      padding-bottom: 2.5rem;
      h3 {
        @include sc(26px, #444);
        font-weight: normal;
      }
    }
    .article {
      .article-info {
        p {
          padding-bottom: .5rem;
        }
        input {
          width: 100%;
          @include font(14px, 28px);
          padding-left: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 2px;
        }
        textarea {
          width: 100%;
          resize: none;
          height: 4rem;
          padding-left: 0.5rem;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          @include font(14px, 28px);
        }
      }
    }
    .save {
      text-align: center;
      margin-top: 2rem;
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
