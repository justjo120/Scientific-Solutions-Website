<template>
  <v-card>
    <v-card-title>{{post.title}}</v-card-title>
    <v-card-text>{{post.preview}}</v-card-text>
    <v-card-actions>
      <v-btn :to="routeToPost">Read</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:['post'],
  computed: {
    routeToPost() {
      return `/blog/post/${this.post.id}`;
    }
  }
}
</script>

<style>

</style>