<template>
  <div>
    <Navbar />
    <header class="header">
      <h1>Productos</h1>
    </header>
    <div class="contenedorProductos">
      <Product
        v-for="(item, i) in products"
        :key="i"
        :id="item.id"
        :title="item.title"
        :price="item.price"
        :thumbnail="item.thumbnail"
      >
      </Product>
      </div>
  </div>
</template>

<script>
import mixins from "../../mixins/mixins.js";
import Navbar from "../../components/layout/Navbar.vue";
import Product from "../../components/products/Product.vue";

export default {
  name: "ProductsVw",
  components: {
    Navbar, Product
  },
  data() {
    return {
      products: [],
    };
  },
  mixins: [mixins],
  mounted() {
    this.GetProductsWithAxios();
  }
};
</script>

<style>
</style>