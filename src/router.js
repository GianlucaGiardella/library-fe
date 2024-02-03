import { createRouter, createWebHistory } from 'vue-router';

import Login from './pages/Login.vue';
import BookList from './pages/BookList.vue';
import BookDetails from './pages/BookDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
        },
        {
            path: '/books',
            name: 'book-list',
            component: BookList,
        },
        {
            path: '/books/:id',
            name: 'book-details',
            component: BookDetails,
        },
    ]
});

export { router };
