<template>
  <div class="container my-5">
    <ListTabla :button="button" />
    <p>Juegos con Stock: {{ $store.getters.totalStock }}</p>
  </div>
</template>

<script>
import ListTabla from "./ListTabla.vue";
export default {
  components: {
    ListTabla,
  },
  data() {
    return {
      button: true,
    };
  },
};
</script>

<style>
</style>
