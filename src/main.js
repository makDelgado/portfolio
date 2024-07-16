import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/main.css';
import 'w3-css/w3.css';

import 'jquery';
import 'popper.js';
import 'bootstrap';

const app = createApp(App)

app.use(router)

app.mount('#app')
