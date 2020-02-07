<template>
  <v-card>
    <v-card-title>
      <span class="headline">Tell Us More About You</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="First name*" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Last name*" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Email*" required></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="[
                'Custom Chemical Blends',
                'Manufacturing Gloves',
                'Repackaging Solutions',
                'Other'
              ]"
              label="I'm interested in..."
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDialog">
        Close
      </v-btn>
      <v-btn color="blue darken-1" text @click="closeDialog">
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['dialog'],
  data: () => {},
  methods: {
    closeDialog() {
      this.$store.commit('quote/setDisplay', false);
    }
  }
};
</script>
