<template>
  <v-container>
    <v-row justify="space-around">
      <v-col
        cols="12"
        md="6"
        v-for="(item,index) in DisplayCards" :key="index">
        <ServiceItem
          :title="item.title"
          :subtitle="item.subtitle"
          :icon="item.icon"
          :order="item.order"
          :action="item.action"/>
      </v-col>
    </v-row>

    <v-row>
      <ContactForm />
    </v-row>

    <!-- <v-container class="pa-2" fluid>
      <v-row>
        <v-col cols="6">
          <v-card text="center" color="#385F73" dark
            ><v-icon center>mdi-flask-outline</v-icon>
            <v-card-title class="headline">Chemicals</v-card-title>

            <v-card-subtitle
              >For all your Laboratory Solvent needs</v-card-subtitle
            >

            <v-card-actions>
              <v-btn text>More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card text="center" color="#385F73" dark
            ><v-icon center>mdi-hand</v-icon>
            <v-card-title class="headline">Manufacturing Gloves</v-card-title>

            <v-card-subtitle
              >Industrial strength manufacturing gloves</v-card-subtitle
            >

            <v-card-actions>
              <v-btn text>More</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card text="center" color="#385F73" dark
            ><v-icon center>mdi-cube-outline</v-icon>
            <v-card-title class="headline">Repackaging Services</v-card-title>

            <v-card-subtitle>Custom to your specifications</v-card-subtitle>

            <v-card-actions>
              <v-btn text>More</v-btn>
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
    </v-container> -->
  </v-container>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import ContactForm from "~/components/ContactForm.vue";
import ServiceItem from "~/components/ServiceItem";

export default {
  components: {
    Logo,
    VuetifyLogo,
    ContactForm,
    ServiceItem,
  },
  data: () => {
    return {
      DisplayCards: [{
        order: 0,
        title: 'Chemicals',
        subtitle: 'For all your Laboratory Solvent needs',
        icon: 'mdi-flask-outline',
        action: {
          text: 'More',
          func: ''
        },
        route: '',
      }, {
        order: 1,
        title: 'Manufacturing Gloves',
        subtitle: 'Industrial strength manufacturing gloves',
        icon: 'mdi-hand',
        action: {
          text: 'More',
          func: ''
        },
        route: '',
      }, {
        order: 2,
        title: 'Repackaging Services',
        subtitle: 'Custom to your specifications',
        icon: 'mdi-cube-outline',
        action: {
          text: 'More',
          func: ''
        },
        route: '',
      }, {
        order: 3,
        title: 'Extra',
        subtitle: 'TODO',
        icon: 'mdi-flask-outline',
        action: {
          text: 'More',
          func: ''
        },
        route: '',
      }]
    }
  },
};

//extra urls for photos
</script>
