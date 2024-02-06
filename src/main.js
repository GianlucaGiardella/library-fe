import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';

import VueAwesomePaginate from "vue-awesome-paginate";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

library.add(fas, far);

createApp(App)
    .use(router)
    .use(VueAwesomePaginate)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');