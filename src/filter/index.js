'use strict'

import Vue from 'vue'

function PrefixInteger (num, length) {
  return (Array(length).join('0') + num).slice(-length)
}

const filters = {
  // 时间格式处理
  dateFormatter: d => {
    const date = new Date(d)
    const yy = date.getFullYear()
    const mm = PrefixInteger((date.getMonth() + 1), 2)
    const dd = PrefixInteger(date.getDate(), 2)
    const hh = PrefixInteger(date.getHours(), 2)
    const min = PrefixInteger(date.getMinutes(), 2)
    const sec = PrefixInteger(date.getSeconds(), 2)
    return `${yy}-${mm}-${dd} ${hh}:${min}:${sec}`
  }
}

// 注册全局过滤
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
