<template>
  <div id="blog">
    <h3>Add a New Blog Post</h3>
    <form v-if="!submitted">
     
      <!-- basic text input fields -->
      <label for="Blog Title">Blog Title</label>
      <input
        type="text"
        id="Blog TItle"
        placeholder="Title of your Blog"
        v-model.lazy="formData.title"
      />
      <textarea
        v-model="formData.content"
        name="blogPost"
        id=""
        cols="30"
        rows="10"
      >
      </textarea>
      <!--checkbox input fields  -->
      <div id="checkboxes">
        <label for="Football">
          <input
            type="checkbox"
            value="football"
            v-model="formData.categories"
          />Football</label
        >

        <label for="Music">
          <input
            type="checkbox"
            value="music"
            v-model="formData.categories"
          />Music</label
        >
        <label for="Sports">
          <input
            type="checkbox"
            value="sports"
            v-model="formData.categories"
          />Sports</label
        >
        <label for="Lifestyle">
          <input
            type="checkbox"
            value="lifestyle"
            v-model="formData.categories"
          />Lifestyle</label
        >
      </div>
       <!-- select boxes -->
    <label for="">Author:</label>
    <select v-model="formData.author" name="author" id="author">
      <option v-for="(author, index) in authors" :key="index">{{
        author
      }}</option>
    </select>

    <button @click.prevent="submitPost">Add Blog</button>
    </form>
    <!-- conditional vif to state if the form has been successfully submitted or not -->
       <div v-if="submitted">
            <h4>Thanks for adding your post</h4>
        </div>
    <!-- where data can be outputted -->
    <div id="preview">
      <h3>Preview of Blog</h3>
      <p>Blog title:{{ formData.title }}</p>
      <p>Blog Content</p>
      <p>{{ formData.content }}</p>
      <ul>
        <li v-for="(category, index) in formData.categories" :key="index">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{formData.author}}</p>
    </div>
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["J.K Rowling", "Stan Lee", "Dan Steel"],
      submitted: false
    };
  },
  methods: {
      submitPost() {
          axios.post('/posts.json', this.formData).then((response) => {console.log(response)
          this.submitted= true
          })
          .catch((error) => console.log(error))
      }
  },
};
</script>

<style>
#blog * {
  box-sizing: border-box;
}
#blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin: 10px;
}

#checkboxes label {
  display: inline-block;
}
</style>
