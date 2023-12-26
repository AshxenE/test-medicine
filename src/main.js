import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import "@/assets/global.css";
import VueTheMask from "vue-the-mask";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
Vue.use(VueTheMask);
Vue.use(Vuelidate);

Vue.config.productionTip = false;
const messages = {
  English: {
    message: {
      name: "Closed",
      evidence: "Evidence-based",
      club: "Medicine Club",
      sendCode: "Send code",
      number: "Phone number",
      terms: "I hereby agree to the",
      link: "terms of processing of my personal data.",
    },
  },
  German: {
    message: {
      name: "Geschlossen",
      evidence: "Evidenzbasiert",
      club: "Medizinclub",
      sendCode: "Code senden",
      number: "Telefonnummer",
      terms: "Hiermit stimme ich dem zu",
      link: "Bedingungen für die Verarbeitung meiner personenbezogenen Daten.",
    },
  },
  Spanish: {
    message: {
      name: "Cerrado",
      evidence: "Basado en evidencia",
      club: "Enviar código",
      sendCode: "Enviar código",
      number: "Número de teléfono",
      terms: "Por la presente acepto el ",
      link: "Condiciones de tratamiento de mis datos personales.",
    },
  },
};
const i18n = new VueI18n({
  locale: "English",
  messages,
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
