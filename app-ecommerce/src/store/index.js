import Vue from "vue";
import Vuex from "vuex";
import Api from "../services/api.services.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: true,
  state: {
    cartItems: JSON.parse(localStorage.getItem('cart')) || [],
    logged: false,
  },
  getters: {
    getCartItems(state) {
      return state.cartItems;
    },
    getProducts(state) {
      return state.products;
    },
    getLogged(state) {
      return state.logged;
    }
  },
  mutations: {
    update: async (state, id, qty = 1) => {
      try {
        let products = await Api.getProducts();
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = products.find((item) => item.id === id);
        console.log(cart);
        cart.push({
          ...product,
          qty,
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        state.cartItems = cart;
      } catch (error) {
        console.log(error);
      }
    },
    deleteCart: async(state) => {
      try {
        localStorage.removeItem('cart');
        state.cartItems = [];
      } catch (error) {
        console.log(error)
      }
    },
    loggedTrue: (state) => {
      state.logged = true;
    },
    loggedFalse: (state) => {
      state.logged = false;
    },
  },
  actions: {
    updateCartItems: (context, id) => {
      context.commit('update', id);
    },
    deleteCartItems: (context) => {
      context.commit('deleteCart');
    },
    updateLoginTrue: (context, id) => {
      context.commit('loggedTrue');
    },
    updateLoginFalse: (context, id) => {
      context.commit('loggedFalse');
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
