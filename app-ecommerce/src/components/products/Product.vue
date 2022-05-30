<template>
  <div>
    <div class="grillaProducto text-center">
      <div>
        <img :alt="title" :src="thumbnail" class="imagenProductoGrilla" />
      </div>
      <h3>{{ title }}</h3>
      <div>$ {{ price }}</div>
      <div class="container-buttons">
        <button type="button" class="botonComprar" @click="$store.dispatch('updateCartItems', id)">
            Agregar
        </button>
        <button type="button" class="botonComprar">
            Ver Detalles
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
      products() {
          return this.$store.getters.getProducts;
      }
  },
  methods: {
    addProductToCart(id) {
        this.$store.dispatch('updateCartItems', id);
    },
    AddCartLocal() {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let newItem = {
        title: this.title,
        price: this.price,
        qty: 1,
      };
      cart.push(newItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.$store.dispatch('updateCartItems');
    },
  },
};
</script>

<style>
</style>
