<template>
  <div>
    <div class="grillaProducto text-center">
      <div>
        <img :alt="title" :src="thumbnail" class="imagenProductoGrilla" />
      </div>
      <h3>{{ title }}</h3>
      <div>
            <p>{{ description }}</p>
      </div>
      <div class="price-style">$ {{ price }}</div>
      <div class="container-buttons-col">
        <Add :id="id" />
      </div>
    </div>
  </div>
</template>

<script>
import Add from '../ui/Add.vue';

export default {
  name: "ProductDetail",
  components: {
    Add,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
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
};
</script>

<style>
</style>
