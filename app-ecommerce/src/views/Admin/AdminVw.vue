<template>
  <div>
    <Navbar />
    <header class="header">
      <h1>Admin</h1>
      <h2 class="alert-style">{{ alert }}</h2>
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
      alert: '',
    };
  },
  mixins: [mixins],
  mounted() {
    if (this.$store.getters.getLogged) {
      this.GetProductsWithAxios();
    } else {
      this.alert = 'Acceso denegado'
      this.$route.push({name: 'login'});
    }
    
  },
};
</script>

<style scoped>
.alert-style {
  color: rgb(207, 30, 30);
}
</style>