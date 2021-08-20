<template>
  <div id="app">
    <h1 class="text-dark bold text-center">Tienda 32Bits</h1>
    <h2 class="text-dark text-center">juegos Pc y consolas</h2>
    <NavList />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavList from "./components/NavList.vue";

export default {
  components: { NavList },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>