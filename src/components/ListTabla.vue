<template>
  <div class="container my-5">
    <ul>
      <li
        v-for="juego in $store.getters.juegos"
        :key="juego.codigo"
        :style="{
          backgroundColor: juego.color,
        }"
      >
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} |
        {{ juego.precio }} |
        <button
          class="btn btn-dark"
          @click="venta(juego)"
          v-if="button"
          :disabled="true ? juego.stock === 0 : false"
        >
          vender
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    button: Boolean,
  },
  components: {},
  computed: {},
  async mounted() {
    await this.filtrar({ propiedad: "codigo", valor: "" });
  },
  methods: {
    ...mapActions(["getFetch", "filtrar", "venta"]),
  },
};
</script>