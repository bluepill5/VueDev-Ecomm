<template>
  <div class="container form-style">
    <!-- Formulario -->
    <form class="form-container" @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          class="form-control"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="***********"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    {{ success }}
  </div>
</template>

<script>
import Api from "../../services/api.services.js";
import { mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      success: false,
    };
  },
  methods: {
    async login() {
      let user = undefined;
      try {
        let users = await Api.getUsers();
        user = users.find(
          (user) => (user.username === this.username) & (user.password === this.password)
        );
        if(user) {
          this.success = true;
          this.$store.dispatch('updateLoginTrue');
          // this.$router.push({ name: 'home' });
        } else {
          this.success = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
		...mapState(['logged'])
	},
};
</script>

<style>
</style>