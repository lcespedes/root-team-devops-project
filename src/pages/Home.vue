<template>
  <div class="overlay">
    <div class="content animate__animated animate__fadeIn">
      <h1 class="grupo animate__animated animate__pulse animate__infinite">r00t team</h1>

      <main style="display: flex; gap: 40px">
        <section style="flex:1;" class="card">
          <h2>Estrategia de branching: <strong>Trunk-Based</strong></h2>
          <p>
            Es una estrategia moderna donde los desarrolladores integran cambios pequeños,
            rápidos y frecuentes sobre una sola rama principal (main o trunk),
            reduciendo complejidad y facilitando CI/CD.
          </p>
  
          <ul class="list">
            <li>✔ Enfoque simple y minimalista.</li>
            <li>✔ Todos integran continuamente en <strong>main</strong>.</li>
            <li>✔ Cambios pequeños y rápidos.</li>
            <li>✔ Alta orientación a CI/CD y despliegues continuos.</li>
          </ul>
  
          <pre class="code-block">
  main
   └── feature branches (muy cortas)
          </pre>
        </section>
  
        <section style="flex:1;" class="card">
          <h2>Estrategia de deploy: <strong>Rolling Update</strong></h2>
          <p>
            Método en el que nuevas versiones reemplazan gradualmente a las antiguas
            sin detener el servicio.
          </p>
  
          <ul class="list">
            <li>1️⃣ Se crea una instancia con la nueva versión.</li>
            <li>2️⃣ Cuando está lista, se elimina una instancia antigua.</li>
            <li>3️⃣ Se repite hasta completar el reemplazo.</li>
          </ul>
          <br>
          <br>
          <p><strong>Resultado:</strong> Despliegue sin downtime y monitoreo seguro!</p>
        </section>
      </main>

    </div>
  </div>
</template>

<style scoped>

/* Contenido centrado */
.content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: auto;
  text-align: center;
}

/* Título estilo hacker neon */
.grupo {
  font-size: 3.4rem;
  color: #00ff9d;
  text-shadow: 0 0 10px #00ff9d, 0 0 20px #00ff9d, 0 0 30px #00ff9d;
  letter-spacing: 6px;
  font-weight: bold;
  text-transform: uppercase;
}

/* Tarjetas de contenido */
.card {
  background: rgba(0, 0, 0, 0.35);
  border: 2px solid rgba(201, 252, 231, 0.623);
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 40px;
  box-shadow: 0 0 15px rgba(0, 255, 150, 0.15);
  backdrop-filter: blur(8px);
}

.card h2 {
  font-size: 2rem;
  color: #bdffe9;
  margin-bottom: 10px;
}

.card p {
  color: #d4d4d4;
  font-size: 1.2rem;
}

/* Listas */
.list {
  list-style: none;
  margin-top: 20px;
  padding: 0;
  font-size: 1.2rem;
  color: #bdffe9;
}

.list li {
  margin: 8px 0;
}

/* Bloque de código */
.code-block {
  margin-top: 20px;
  font-size: 1rem;
  color: #00ffbb;
  background: rgba(0, 0, 0, 0.5);
  padding: 12px;
  border-left: 3px solid #00ffbb;
  display: inline-block;
  text-align: left;
}
</style>