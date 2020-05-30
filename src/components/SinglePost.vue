<template>
  <div id="single-post">
      <h1>{{blog.title}}</h1>
      <article>{{blog.content}}</article>
      <br>
      <em>By: {{blog.author}}</em>
      <ul>
          <li v-for="(category, index) in blog.categories" :key="index">{{category}}</li>
      </ul>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
           id: this.$route.params.id,
           blog: {} 
        }
    },

    created() {
        axios.get(`/posts/${this.id}.json`).then((response)=> {
            console.log(response)
            return response.data
            
        }).then((data)=> {
            this.blog = data
        })
        .catch((error)=> {
            console.log(error)
        })
    },
}
</script>

<style>
#single-post {
    max-width: 960px;
    margin: 0 auto;
}
</style>