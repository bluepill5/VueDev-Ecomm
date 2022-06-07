<template>
  <div>
    <div class="grillaProducto text-center">
      <div>
        <img :alt="title" :src="thumbnail" class="imagenProductoGrilla" />
      </div>
      <h3>{{ title }}</h3>
      <div>$ {{ price }}</div>
      <div class="container-buttons">
        <button
          type="button"
          class="botonComprar"
          @click="addProductToCart(id)"
        >
          Agregar
        </button>
        <button type="button" class="botonComprar">
          <router-link class="botonRouter" :to="{ name: 'productoId', params: { id: id } }">
            Ver Detalles
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
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
    },
  },
  methods: {
    addProductToCart(id) {
      this.$store.dispatch("updateCartItems", id);
    },
  },
};
</script>

<style>
</style>
