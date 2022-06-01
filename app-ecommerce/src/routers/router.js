import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home/Home.vue"),
  },
  {
    path: "/productos/:id",
    name: "productoId",
    component: () => import("../views/Products/ProductDetailVw.vue"),
    params: true,
  },
  {
    path: "/productos",
    name: "productos",
    component: () => import("../views/Products/ProductsVw.vue"),
  },
  {
    path: "/carrito",
    name: "carrito",
    component: () => import("../views/Cart/CartVw.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Users/LoginVw.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: {
      beforeRouteEnter(to, from, next) {
        next((vm) => {
          // access to component instance via `vm`
          if (vm.$store.state.logged) {
            vm.$store.dispatch("updateLoginFalse");
            next("/");
          } else {
            next();
          }
        });
      },
    },
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/Users/SignUpVw.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
