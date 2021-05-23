import Vue from 'vue'
import Main from './main'
require('@babel/polyfill')
require('../styles/style.css')
require('../styles/style.less')
require('../styles/style.scss')
require('./moduleLog')()
document.write('<h1>app is loaded</h1>')
new Promise(res => {
  document.write('<h1>promise执行了</h1>')
})
// require('./App')
new Vue({
  render: h => h(Main)
}).$mount('#app')
