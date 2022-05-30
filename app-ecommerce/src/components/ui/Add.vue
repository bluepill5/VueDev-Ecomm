<template>
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
</template>

<script>
export default {
  name: "Add",
  data() {
      return {
          numContador: 1,
      }
  },
  methods: {
    upContador() {
      this.numContador = this.numContador + 1;
      return this.numContador;
    },
    downContador() {
      if (this.numContador === Number(0)) {
        return this.numContador;
      } else {
        this.numContador = this.numContador - 1;
        return this.numContador;
      }
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