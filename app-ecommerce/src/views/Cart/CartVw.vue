<template>
  <div>
    <Navbar />
    <header class="header">
      <h1>Carrito de compras</h1>
    </header>

    <div v-if="$store.getters.getCartItems.length > 0">
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
              <th>{{ item.id }}</th>
              <th>
                <img
                  :src="item.thumbnail"
                  alt="Imagen del producto"
                  width="60"
                  height="60"
                />
              </th>
              <th>
                <a :href="'/productos/' + item.id">
                  {{ item.title }}
                </a>
                <Remove :id=item.id />
              </th>
              <th>
                {{ item.qty }} 
              </th>
              <th>
                <span class="font-weight-bold text-danger">{{
                  item.price
                }}</span>
              </th>
            </tr>
          </tbody>
        </table>

        <div class="col">
            <div class="card-body">
                <div class="font-weight-bold">
                    Subtotal ({{ ItemsCount }}): <span class="text-danger">{{ SubTotal }}</span>
                </div>
            </div>
        </div>

        <div class="col">
          <div class="card-body">
            <div class="font-weight-bold">
              <!-- Subtotal ({{ session.cart.totalQty }}): -->
              <!-- <span class="text-danger">{{ session.cart.totalPrice }}</span> -->
            </div>
            <div class="container-buttons">
              <div class="mt-2">
                <a href="" class="btn btn-warning">Proceder al pago</a>
              </div>
              <div class="mt-2">
                <button
                  type="button"
                  class="btn btn-info d-inline"
                  id="add"
                  @click="deleteCart"
                >
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="StoredCart.length <= 0" class="col">
      {{ cartItems }}
      <p class="h3">Tu carrito de compras está vacío.</p>
      <a href="/productos">Seguir comprando</a>
    </div>
  </div>
</template>

<script>
import Navbar from "../../components/layout/Navbar.vue";
import Remove from "../../components/ui/Remove.vue";
import { mapState } from "vuex";

export default {
  name: "Cart",
  components: {
    Navbar, Remove,
  },
  methods: {
    deleteCart() {
      this.$store.dispatch("deleteCartItems");
    },
  },
  computed: {
    StoredCart() {
      return this.$store.getters.getCartItems;
    },
    ItemsCount() {
      let n_items = this.$store.getters.getCartItems.map(item => item.qty).reduce((val, acc) => val + acc, 0);
      return n_items;
    },
    SubTotal() {
      let subtotal = this.$store.getters.getCartItems.map(item => Number(item.price) * item.qty).reduce((val, acc) => val + acc, 0);
      return subtotal;
    },
    ...mapState(['cartItems']),
  },
};
</script>

<style>
</style>