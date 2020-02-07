<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        app
        color="primary"
        dark
        shrink-on-scroll
        prominent
        src="/img/clear-glass-flasks.jpg"
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

        <template v-slot:extension>
          <v-tabs
            align-with-title
            slider-size="0"
          >
            <v-tab v-for="(item, index) in tabs"
            nuxt
            :key="index"
            :to="item.route"
            >
              {{item.displayName}}
            </v-tab>
            <v-spacer></v-spacer>
          </v-tabs>
        </template>
      </v-app-bar>

      <v-sheet id="scrolling-techniques-2" class="overflow-y-auto">
        <v-container style="height: 1000px;">
          <v-content>
            <nuxt />
          </v-content>
        </v-container>
      </v-sheet>
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
    return {
      tabs: [{
        displayName: "Home",
        route: "/",
      },{
        displayName: "About",
        route: "/about",
      },{
        displayName: "Blog",
        route: "/blog",
      }]
    };
  },
};
</script>
