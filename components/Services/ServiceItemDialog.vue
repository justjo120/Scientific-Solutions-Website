<template>
  <v-dialog>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on">
        {{action.text}}
      </v-btn>
    </template>
    <v-card>
      <v-card-title>{{title}}</v-card-title>
      <v-card-text>{{dialogText}}</v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["action", "title", "dialogText"]
}
</script>

<style>

</style>