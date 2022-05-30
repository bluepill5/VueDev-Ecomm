<template>
  <div>
    <Navbar />
    <header class="header">
      <h1>Detalle</h1>
    </header>
    <div class="contenedorProductos">
      <ProductDetail
        :id="GetProduct.id"
        :title="GetProduct.title"
        :description="GetProduct.description"
        :price="GetProduct.price"
        :thumbnail="GetProduct.thumbnail"
      >
      </ProductDetail>
    </div>
  </div>
</template>

<script>
import mixins from "../../mixins/mixins.js";
import Navbar from "../../components/layout/Navbar.vue";
import ProductDetail from "../../components/products/ProductDetail.vue";

export default {
  name: "ProductDetailVw",
  components: {
    Navbar,
    ProductDetail,
  },
  data() {
    return {
      products: [],
    };
  },
  mixins: [mixins],
  computed: {
    GetProduct() {
      let id = this.$route.params.id.toString();
      return this.products.find((product) => product.id === id);
    },
  },
  mounted() {
    this.GetProductsWithAxios();
  },
};
</script>

<style>
</style>