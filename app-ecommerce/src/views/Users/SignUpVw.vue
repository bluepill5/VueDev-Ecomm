<template>
  <div>
    <Navbar />
    <header class="header">
      <h1>Sign Up</h1>
    </header>
    <SignUp />
  </div>
</template>

<script>
import Navbar from "../../components/layout/Navbar.vue";
import SignUp from "../../components/users/SignUp.vue";

export default {
  name: "SignUpVw",
  components: {
    Navbar,
    SignUp,
  },
};
</script>

<style>
</style>