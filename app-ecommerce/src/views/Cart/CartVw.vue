<template>
  <div>
    <Navbar />
    <header class="header">
      <h1>Carrito de compras</h1>
    </header>

    <div v-if="StoredCart">
         <div class="col-8">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody v-for="item in StoredCart" :key="item.id">
          <!-- cart.products -> solo hace referencia a la relacion -->
          <tr>
            <th>1</th>
            <th>
              <img
                :src="item.thumbnail"
                alt="Imagen del producto"
                width="60"
                height="60"
              />
            </th>
            <th>
              <a href="/productos/">
                {{ item.title }}
              </a>
              <!-- {{>remove}} -->
            </th>
            <th>
              <!-- {{ this.qty }} -->
            </th>
            <th>
              <span class="font-weight-bold text-danger">{{ item.price }}</span>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col">
      <div class="card-body">
        <div class="font-weight-bold">
          <!-- Subtotal ({{ session.cart.totalQty }}): -->
          <!-- <span class="text-danger">{{ session.cart.totalPrice }}</span> -->
        </div>
        <div class="mt-2">
          <a href="" class="btn btn-warning">Proceder al pago</a>
        </div>
      </div>
    </div>

    </div>

    <div class="col">
      <p class="h3">Tu carrito de compras está vacío.</p>
      <a href="/productos">Seguir comprando</a>
    </div>

  </div>
</template>

<script>
import Navbar from "../../components/layout/Navbar.vue";

export default {
  name: "Cart",
  components: {
    Navbar,
  },
  computed: {
      StoredCart() {
          return this.$store.getters.getCartItems;
      },
      cartCount() {
          return this.StoreCart.length;
    },
  }
};
</script>

<style>
</style>