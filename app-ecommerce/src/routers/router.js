import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home/Home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Users/LoginVw.vue'),
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import('../views/Users/SignUpVw.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;


