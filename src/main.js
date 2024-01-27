import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createRouter, createWebHashHistory } from 'vue-router';

import './style.scss';
import './checkbox.scss';
import App from './App.vue';
import MainPage from './components/MainPage.vue';
import ArchivedPage from './components/ArchivedPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/archive', component: ArchivedPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(router);
app.use(pinia);
app.mount('#app');
