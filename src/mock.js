'use strict'

import Mock from 'mockjs'

const getArticles = function () {
  let articles = []
  return articles
}

const getArticleDetail = function () {
  const article = {
    id: 1,
    title: 'Nodejs中的fs模块文件路径问题',
    introduction: '使用fs模块，通过相对路径读取文件时出现问题。',
    created_time: '2019-07-09',
    type: 'NodeJS',
    text: '# text'
  }
  return article
}

Mock.mock('/api/articles', 'get', getArticles)
Mock.mock('/api/article/:id', 'get', getArticleDetail)
