<template>
  <nav class="navbar" style="text-align: center;">
    <section>
      <a class="logo" href="/">
        <h2>Introducción a Devops, Contenedores y Kubernetes ({{ version }})</h2>
      </a>
      <div class="links">
        <RouterLink to="/"><h2>INICIO</h2></RouterLink>
        <RouterLink to="/integrantes"><h2>INTEGRANTES</h2></RouterLink>
      </div>
    </section>
  </nav>
</template>

<script setup>
import pkg from '../../package.json'
const version = pkg.version
</script>

<style>
.navbar {
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222;
  color: white;
}
.logo {
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
  color: #4ade80;
}
.links {
  margin-top: 6px;
  display: flex;
  gap: 20px;
  justify-content: center;
}
.links a {
  color: white;
  text-decoration: none;
  transition: 0.3s;
}
.links a:hover {
  color: #4ade80;
}
</style>