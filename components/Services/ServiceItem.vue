<template>
  <v-card shaped class="ss_card">
    <v-card-title v-if="title">
      <span
        ><h3>{{ title }}</h3></span
      >
      <v-spacer />
      <v-icon large>{{ icon }}</v-icon>
    </v-card-title>
    <v-card-subtitle v-if="subtitle">{{ subtitle }}</v-card-subtitle>
    <v-card-text v-if="text">{{ text }}</v-card-text>
    <v-card-actions v-if="action.text">
      <v-spacer></v-spacer>
      <ServiceItemDialog :title="title" :action="action" :dialogText="dialogText"/>
    </v-card-actions>
  </v-card>
</template>

<script>
import ServiceItemDialog from '~/components/Services/ServiceItemDialog.vue';

export default {
  components: {
    ServiceItemDialog,
  },
  props: ["title", "subtitle", "text", "icon", "action", "description", "dialogText"]
};
</script>
<style lang="scss" scoped>
.ss_card {
  background: linear-gradient(145deg, $ss_secondary, $ss_primary);
}
</style>
