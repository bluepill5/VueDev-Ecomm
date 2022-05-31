<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky">
     <a href="/" class="navbar-brand">E-products</a>

    <button type="button" name="button" class="navbar-toggler navbar-toggler-right" data-toggler="collapse" data-target="#navb">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navb" class="navbar-collapse collpase hide">

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/formulario">
            <i class="fa-solid fa-file-lines"></i>
            REGISTRAR <span class="fas fa-solid fa-file-code"></span>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/productos">
            <i class="fa-solid fa-file-lines"></i>
            PRODUCTOS <span class="fas fa-solid fa-file-code"></span>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/productos-test">
            <i class="fa-solid fa-file-lines"></i>
            ALMACEN <span class="fas fa-solid fa-file-code"></span>
          </a>
        </li>
      </ul>


      <ul class="nav navbar-nav ms-auto">
        <li class="navbar-item">
          <a href="/carrito" class="nav-link">
            <span class="fas fa-shopping-cart"></span>
            Mi carrito
            <span class="badge badge-pill badge-secondary">{{ $store.getters.getCartItems.length }}</span>
          </a>
        </li>


        <li v-if="this.$store.getters.getLogged" class="navbar-item">
          <a href="/logout" class="nav-link">
            <span class="fas fa-sign-in-alt"></span>
            Logout
          </a>
        </li>

        <li v-if="!this.$store.getters.getLogged" class="navbar-item">
          <a href="/login" class="nav-link">
            <span class="fas fa-user"></span>
            Login
          </a>
        </li>

        <li class="navbar-item">
          <a href="/signup" class="nav-link">
            <span class="fas fa-user-plus"></span>
            Registro
          </a>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  props: {

  }
};
</script>

<style>
</style>