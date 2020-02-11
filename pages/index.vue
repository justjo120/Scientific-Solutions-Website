<template>
  <v-container>
    <v-row justify="space-around">
      <v-col
        cols="12"
        md="6"
        v-for="(item, index) in DisplayCards"
        :key="index"
      >
        <ServiceItem
          :title="item.title"
          :subtitle="item.subtitle"
          :icon="item.icon"
          :order="item.order"
          :action="item.action"
        />
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-btn color="primary" dark @click.stop="openQuoteDialog"
        >Request A Quote</v-btn
      >
      <v-dialog v-model="shouldDisplayQuoteDialog" persistent max-width="600px">
        <ContactForm />
      </v-dialog>
    </v-row>
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
    ServiceItem
  },
  data: () => {
    return {
      DisplayCards: [
        {
          order: 0,
          title: "Chemicals",
          subtitle: "For all your Laboratory Solvent needs",
          icon: "mdi-flask-outline",
          action: {
            text: "More",
            func: ""
          },
          route: ""
        },
        {
          order: 1,
          title: "Manufacturing Gloves",
          subtitle: "Industrial strength manufacturing gloves",
          icon: "mdi-hand",
          action: {
            text: "More",
            func: ""
          },
          route: ""
        },
        {
          order: 2,
          title: "Repackaging Services",
          subtitle: "Custom to your specifications",
          icon: "mdi-cube-outline",
          action: {
            text: "More",
            func: ""
          },
          route: ""
        },
        {
          order: 3,
          title: "Chemical Blends",
          subtitle: "Speciality blends provided from our affliate partners",
          icon: "mdi-test-tube",
          action: {
            text: "MORE",
            func: ""
          },
          route: ""
        }
      ]
    };
  },
  computed: {
    shouldDisplayQuoteDialog() {
      return this.$store.state.quote.isDisplayEnabled;
    }
  },
  methods: {
    openQuoteDialog() {
      this.$store.commit("quote/setDisplay", true);
    }
  }
};
</script>
<style lang="scss" scoped>
.ss_background {
  background-color: $ss_blank;
}
</style>
