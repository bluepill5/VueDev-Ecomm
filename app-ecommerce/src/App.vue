<template>
  <div id="app">
    <router-view 
      :cart=cart
      :reset=reset
      @add-to-cart="updateCart"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data() {
    return {
      user: null,
      cart: [],
      reset: false,
    }
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getCart() {
      this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    updateCart({productId, counter}) {
      this.reset = false;
      const productInCart = this.cart.find(product => product.id === productId);

      if (counter > 0) {
        if (productInCart) {
          productInCart.qty = counter;
          productInCart.total = productInCart.qty * productInCart.price;
        } else {

        }
      }
    }
  }
}
</script>

<style>
</style>
