<template>
  <div class="matrix-background">
    <div class="container animate__animated animate__fadeIn">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h2 class="grupo animate__animated animate__pulse animate__infinite">
        r00t team
      </h2>
      <h2 style="color: white">Estrategia de branching: <strong>Trunk-Based</strong></h2>
      <div class="msg">
        Es una estrategia moderna de control de versiones en la que los desarrolladores trabajan de forma continua en una sola rama principal (llamada trunk, main o master) y realizan integraciones pequeñas, frecuentes y rápidas.
        Su objetivo es minimizar la complejidad, acelerar la entrega y facilitar la adopción de CI/CD.
        <br>
        <br>
        Características clave:
        <ul style="text-align: center; font-size: 18px; margin-inline: 200px;">
          <li>Enfoque simple y minimalista.</li>
          <li>Todos los desarrolladores integran continuamente en una sola rama principal (main o trunk).</li>
          <li>Cambios pequeños, rápidos y frecuentes.</li>
          <li>Muy fuerte orientación a CI/CD y despliegues continuos.</li>
        </ul>
        <code style="text-align: left!important;">
          main
          <br>
          └── feature branches (muy cortas)
        </code>
      </div>
      <h2 style="color: white">Estrategia de deploy: <strong>Rolling Update</strong></h2>
      <div class="msg">
        Es un método de despliegue donde las nuevas versiones de una aplicación se van reemplazando gradualmente, pod por pod o instancia por instancia, sin detener el servicio.

        El proceso típico:
        <ul style="text-align: center; font-size: 18px; margin-inline: 200px;">
          <li>1. Se crea una nueva instancia con la nueva versión.</li>
          <li>2. Cuando está lista, se elimina una instancia antigua.</li>
          <li>3. Se repite hasta que todas las instancias son nuevas.</li>
        </ul>
        Resultado: actualización sin downtime y con capacidad de monitorear que la nueva versión funcione antes de reemplazar completamente la anterior.
      </div>
    </div>
  </div>
</template>

<style>
/* Fondo tipo Matrix */
.matrix-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: black;
  z-index: -1;
}

.matrix-background::before {
  content: "01 10 01 01 00 11 10 01 10 00 01 11 01 01 10 00 11 01 01 10 01 00 11";
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 22px;
  line-height: 30px;
  white-space: pre;
  color: rgba(0, 255, 140, 0.25);
  animation: rain 6s linear infinite;
  margin-left: 15%;
}

@keyframes rain {
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* Centrado y contenido */
.container {
  padding-top: 100px;
  position: relative;
  z-index: 10;
}

.title {
  font-size: 2.8rem;
  color: #10b981;
}

.subtitle {
  color: #d1d5db;
  margin-bottom: 5%;
  font-size: xx-large;
}

/* Grupo estilo neon hacker */
.grupo {
  font-size: 3.2rem;
  margin-top: 20px;
  color: #00ff9d;
  text-shadow: 0 0 10px #00ff9d, 0 0 20px #00ff9d, 0 0 30px #00ff9d;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.msg {
  margin-inline: 300px;
  margin-block: 25px;
  font-size: 1.3rem;
  color: #d1d5db!important;
}
</style>
