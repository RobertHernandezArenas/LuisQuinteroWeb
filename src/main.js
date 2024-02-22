import { createApp } from 'vue';
import './assets/styles/main.css';
import App from './App.vue';
import router from './router';


import i18n from './locales/i18n';

import axios from 'axios';
import VueAxios from 'vue-axios';

const baseURL = 'https://luisquintero.website/';
axios.defaults.baseURL = baseURL;

const app = createApp(App);

app.use(router).use(VueAxios, axios).use(i18n).mount('#app');

