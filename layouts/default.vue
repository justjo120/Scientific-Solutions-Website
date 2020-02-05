<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="primary"
        dark
        shrink-on-scroll
        prominent
        src="https://i.ibb.co/4JDsJdZ/photo-of-clear-glass-measuring-cup-lot-1366942-1.jpg"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <v-toolbar-title>Scientific Solutions LLC</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-icon>mdi-home</v-icon>
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab>About</v-tab>
            <v-tab>Blog</v-tab>
            <v-tab>Request A Quote</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-content>
        <nuxt />
      </v-content>
    </v-card>
    <v-footer :fixed="fixed" app>
      <v-container>
        <div class="body-2 text-center">
          <span>Scientific Solutions LLC &copy; 2019 All Rights Reserved</span>
          <span>
            <br />Chemicals | Repackaging Services | Manufacturing Gloves |
            Chemical Synthesis |
            <a href="tel:888-608-6689">888-608-6689</a>
          </span>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
