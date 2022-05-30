<template>
  <div>
    <Navbar />
    <header class="header">
      <h1>Home</h1>
      {{ $store.state.cartItems }}
    </header>
  </div>
</template>

<script>
import Navbar from "../../components/layout/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>