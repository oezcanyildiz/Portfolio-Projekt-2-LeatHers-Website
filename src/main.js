import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import '@fortawesome/fontawesome-free/js/all.js';
import './assets/main.css'
import appHeader from './components/NavbarApp.vue'
import appFooter from './components/FooterApp.vue'
import appAxios from './utils/appAxios'
import store from './store';

const app = createApp(App)

app.use(router)
app.use(store)
app.config.globalProperties.$appAxios=appAxios;
app.component("appHeader",appHeader)
app.component("appFooter",appFooter)

app.mount('#app')
