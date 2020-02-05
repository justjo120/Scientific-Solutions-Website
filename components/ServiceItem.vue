<template>
  <v-card shaped class="ss_card">
    <v-card-title v-if="title">
      <span><h3>{{title}}</h3></span>
      <v-spacer/>
      <v-icon large>{{icon}}</v-icon>
    </v-card-title>
    <v-card-subtitle v-if="subtitle">{{subtitle}}</v-card-subtitle>
    <v-card-text v-if="text">{{text}}</v-card-text>
    <v-card-actions v-if="action.text">
      <v-spacer></v-spacer>
      <v-btn text> {{action.text}} </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: [
    'title',
    'subtitle',
    'text',
    'icon',
    'action'
  ],
}
</script>
<style lang="scss" scoped>
.ss_card {
  background-color: $ss_primary;
}
</style>