<template>
  <v-row>
    <v-col cols="12" v-for="post in postList" :key="post.id">
      <PostPreview :post="post"/>
    </v-col>
  </v-row>
</template>

<script>
import PostPreview from '~/components/Blog/PostPreview.vue';
export default {
  components: {
    PostPreview,
  },
  computed: {
    postList() {
      return this.$store.state.blog.posts;
    }
  },
}
</script>

<style>

</style>