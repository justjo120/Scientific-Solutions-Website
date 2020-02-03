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
      <ContactForm />
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
import ContactForm from "~/components/ContactForm.vue";

export default {
  components: {
    Logo,
    VuetifyLogo,
    ContactForm
  },
  data: () => ({
    overlay: false,
    cards: [
      {
        title: "Chemicals",
        src: "https://i.ibb.co/VMz8kjL/laboratory-test-tubes-2280549.jpg",
        flex: 12
      },
      {
        title: "Manufacturing Gloves",
        src:
          "https://i.ibb.co/phvgvxm/person-holding-laboratory-flask-2280571.jpg",
        flex: 6
      },
      {
        title: "Repackaging Services",
        src:
          "https://i.ibb.co/zbZBHqD/photo-of-clear-glass-measuring-cup-lot-1366942.jpg",
        flex: 6
      }
    ]
  })
};

//extra urls for photos
</script>
