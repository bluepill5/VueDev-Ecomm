<template>
  <div>
    <Navbar />
    <header class="header">
      <h1>Login</h1>
    </header>
    <Login />
  </div>
</template>

<script>
import Navbar from "../../components/layout/Navbar.vue";
import Login from "../../components/users/Login.vue";

export default {
  name: "LoginVw",
  components: {
    Navbar,
    Login,
  },
};
</script>

<style>
</style>