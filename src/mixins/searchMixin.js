export default {
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.toLowerCase().match(this.search);
      });
    },
  },
};
