<template>
  <div class="container form-style">
    <!-- Formulario -->
    <form class="form-container" @submit="signup">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          name="username"
          class="form-control"
          placeholder="Username"
          v-model="username"
          @keyup="validateUsername(username)"
          required
        />
        <span v-if="alert.username" class="alert-danger">
          {{ alert.username }}
        </span>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="***********"
          v-model="password"
          @keyup="validatePassword(password)"
          required
        />
        <span v-if="alert.password" class="alert-danger">
          {{ alert.password }}
        </span>
      </div>
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          class="form-control"
          placeholder="firstname"
          v-model="firstName"
          required
        />
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          class="form-control"
          placeholder="lastname"
          v-model="lastName"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="email"
          v-model="email"
          @keyup="validateEmail"
          required
        />
        <span v-if="alert.email" class="alert-danger">
          {{ alert.email }}
        </span>
      </div>
      <button type="submit" class="btn btn-primary">Signup</button>
    </form>
  </div>
</template>

<script>
import Api from "../../services/api.services.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      alert: {
        username: "",
        password: "",
        email: "",
      },
    };
  },
  methods: {
    async signup() {
      try {
        let user = await Api.postUser({
          username: this.username,
          password: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
        });
      } catch (error) {
        console.log(error);
      }
    },
    validateEmail() {
      if (!this.email.includes("@")) {
        this.alert.email = "Ingresa un correo válido";
      } else {
        this.alert.email = "";
      }
    },
    validateUsername(word) {
      if (word.length < 2) {
        this.alert.username = "Username no válido";
      } else {
        this.alert.username = "";
      }
    },
    validatePassword(word) {
      if (word.length < 2) {
        this.alert.password = "Password no válido";
      } else {
        this.alert.password = "";
      }
    },
  },
};
</script>

<style>
</style>