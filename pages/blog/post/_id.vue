<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Post :post="post"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Post from '~/components/Blog/Post.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    Post,
  },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    post() {
      return this.getPostById(this.id);
    },
    ...mapGetters({
      getPostById: 'blog/getPostById'
    }),
  },
}
</script>

<style>

</style>