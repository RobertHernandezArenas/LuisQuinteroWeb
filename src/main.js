import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import './assets/main.css'
import axios from "axios";
import VueAxios from "vue-axios";

const baseURL = "https://luisquintero.website/";
axios.defaults.baseURL = baseURL;

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
