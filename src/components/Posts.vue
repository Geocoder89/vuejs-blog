<template>
  <div id="showPosts">
    <h1>All Blog Articles</h1>
    <input
      type="text"
      v-model="search"
      placeholder="search for your favourite blogs"
    />
    <div v-for="(blog, index) in filteredBlogs" :key="index" class="singlePost">
       <router-link :to="'/blog/' + blog.id">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
       </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import searchMixin from '../mixins/searchMixin'
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  methods: {},
  created() {
    axios.get('posts.json').then((response)=> {
      return response.data
    }).then((data)=> {
      let blogsArray = []
      for(let key in data){
        data[key].id = key
         blogsArray.push(data[key])
      }
    this.blogs = blogsArray;
     
    })
  },
  computed: {
   
  },
  filters: {
    "to-uppercase": function(data) {
      return data.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color = `#${Math.random()
          .toString(16)
          .slice(2, 8)}`;
      },
    },
  },
  mixins: 
      [searchMixin]
};
</script>

<style>
#showPosts {
  max-width: 800px;
  margin: 0 auto;
}

input[type="text"] {
  max-width: 800px;
  margin: 0 auto;
  display: block;
  width: 100%;
  padding: 8px;
}

.singlePost {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
