<template>
  <div class="container animate__animated animate__fadeInUp">
    <h1 class="title">Integrantes del Grupo</h1>

    <ul class="list">
      <li class="card">👤 Lorena Alejandra Céspedes Martinez</li>
      <li class="card">👤 Rodrigo Victor Condori Quisbert</li>
      <li class="card">👤 Ivan Grover Mamani Huanca</li>
    </ul>

  </div>
</template>

<style>
.container {
  padding: 40px;
  text-align: center;
}
.title {
  font-size: 2.2rem;
  color: #00ff9d;
  margin-bottom: 30px;
}
.list {
  list-style: none;
  padding: 0;
}
.card {
  background: #f3f4f6;
  padding: 15px;
  margin: 10px auto;
  max-width: 400px;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: 0.3s;
}
.card:hover {
  transform: scale(1.05);
}
.footer {
  margin-top: 30px;
  color: #6b7280;
}
</style>