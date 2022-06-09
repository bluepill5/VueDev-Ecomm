<template>
  <div>
    <div class="container-buttons margin-style">
      <button
        type="button"
        class="btn btn-info d-inline"
        id="remove"
        @click="downContador"
      >
        -
      </button>
      <input
        type="number"
        :value="numContador"
        class="form-control"
        id="quantity"
        name="quantity"
        readonly
      />
      <button
        type="button"
        class="btn btn-info d-inline"
        id="add"
        @click="upContador"
      >
        +
      </button>
    </div>
    <button
        type="button"
        class="botonComprar"
        @click="addProductToCart(id, numContador)"
      >
        Agregar
      </button>
  </div>
</template>

<script>
export default {
  name: "Add",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      numContador: 1,
      id: this.id
    };
  },
  methods: {
    upContador() {
      this.numContador = this.numContador + 1;
      return this.numContador;
    },
    downContador() {
      if (this.numContador === Number(1)) {
        return this.numContador;
      } else {
        this.numContador = this.numContador - 1;
        return this.numContador;
      }
    },
    addProductToCart(id, qty) {
      let vals = { id, qty }
      this.$store.dispatch("updateCartItems", vals);
    },
  },
};
</script>

<style scoped>
.margin-style {
  margin-block-end: 1rem;
  margin-inline: 0.5rem;
}
</style>