<template>
  <v-container>
    <v-row justify-space-around>
      <v-spacer />
      <h1 class="display-2 font-weight-thin mb-4">Scientific Solutions</h1>
      <v-spacer />
    </v-row>
    <v-row justify-space-around>
      <v-spacer />
      <h4 class="subheading">Let us be your scientific solution</h4>
      <v-spacer />
    </v-row>
    <v-row justify-end>
      <v-spacer></v-spacer>
      <v-btn x-large color="info" dark>Request A Quote</v-btn>
    </v-row>

    <v-container class="pa-2" fluid>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title class="fill-height align-end" v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <div class="flex-grow-1"></div>Expand
              <v-btn icon>
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex>
          <v-row></v-row>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data: () => ({
    overlay: false,
    cards: [
      {
        title: "Chemicals",
        src:
          "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2832&q=80",
        flex: 12
      },
      {
        title: "Manufacturing Gloves",
        src:
          "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
        flex: 6
      },
      {
        title: "Repackaging Services",
        src:
          "https://images.unsplash.com/photo-1524683745036-b46f52b8505a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=958&q=80",
        flex: 6
      }
    ]
  })
};
</script>
