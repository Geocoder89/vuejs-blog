
<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// import Blog from './components/Blog'
// import Posts from './components/Posts'
// import ListPosts from './components/ListPosts'
import Header from './components/Header'
export default {
data() {
  return {
    
  }
},
methods: {
  
},
components: {
//   appBlog: Blog,
//   appPosts: Posts,
//  appListPosts: ListPosts
appHeader: Header
}
}
</script>

<style>
body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
</style>

