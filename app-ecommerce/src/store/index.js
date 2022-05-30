import Vue from "vue";
import Vuex from "vuex";
import Api from "../services/api.services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  },
  getters: {
    getCartItems(state) {
      return state.cartItems;
    },
    getProducts(state) {
      return state.products;
    },
  },
  mutations: {
    update: async (state, id) => {
      try {
        let products = await Api.getProducts();
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = products.find((item) => item.id === id);
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        state.cartItems = cart;
      } catch (error) {
        console.log(error);
      }
    },
  },
  actions: {
    updateCartItems: (context, id) => {
      context.commit("update", id);
    },
  },
  modules: {},
});
