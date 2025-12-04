<template>
  <main style="display: flex; flex-direction: column; background-color: black; height: 100vh;">
    <NavBar />
    <router-view />
  </main>
</template>

<script setup>
import NavBar from "./components/NavBar.vue"
</script>