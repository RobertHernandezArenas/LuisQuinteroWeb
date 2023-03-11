import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import axios from "axios";
import VueAxios from "vue-axios";
const baseURL = "https://luisquintero.website/";
axios.defaults.baseURL = baseURL;

// i18n internationalization
/*import { createI18n } from "vue-i18n";
const i18n = createI18n({
	// something vue-i18n options here ...
});*/

const app = createApp(App);

app.use(createPinia())
	.use(router)
	.use(VueAxios, axios)
	//.use(i18n);
	.mount("#app");
