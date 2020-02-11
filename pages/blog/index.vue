<template>
  <v-container>
    <PostList />
  </v-container>
</template>

<script>
import PostList from '~/components/Blog/PostList.vue';

export default {
  components: {
    PostList
  },
  created() {
    this.$store.dispatch('blog/getPosts');
  },
};
</script>
