<template>
  <div class="container">
    <input
      type="number"
      class="form-control my-4"
      placeholder="ingrese codigo de juego"
      v-model="codigo"
      @keyup="filtrar({ propiedad: 'codigo', valor: codigo })"
    />
    <ListTabla />
    <p>productos con stock : = {{ $store.getters.totalStock }}</p>

    <p>Total stock de juegos: = {{ $store.getters.totalStockJuegos }}</p>
  </div>
</template>

<script>
import ListTabla from "./ListTabla.vue";
import { mapActions } from "vuex";
export default {
  components: {
    ListTabla,
  },
  data() {
    return {
      codigo: "",
    };
  },
  methods: {
    ...mapActions(["filtrar"]),
  },
};
</script>

<style>
</style>