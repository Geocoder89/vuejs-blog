import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false

// http setup with axios
axios.defaults.baseURL = 'https://vue-blog-project-e5525.firebaseio.com/'
axios.defaults.headers.get['Accepts'] = 'application/json'

// custom directives

Vue.directive('theme', {
  bind(el,binding) {
    if(binding.value === 'wide') {
      el.style.maxWidth = "1200px"
    } else if(binding.value === 'narrow') {
      el.style.maxWidth = "800px"
    } if(binding.arg === 'column') {
      el.style.background = '#ddd';
      el.style.padding = '20px'
    }
  }
}) 


Vue.filter('snippet',(data)=> data.slice(0,100) + '....')


new Vue({
  router,
  render: h => h(App),
 
}).$mount('#app')
