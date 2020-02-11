<template>
  <v-card>
    <v-card-title>{{post.title}}</v-card-title>
    <v-card-text>{{post.content}}</v-card-text>
    <v-card-actions>
      <v-btn to="/">Go Home</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:['post']
}
</script>

<style>

</style>