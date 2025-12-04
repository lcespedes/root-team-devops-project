# 🚀 root-team-devops-project

Este es un proyecto frontend simple desarrollado con **Vue 3**, **Vue Router** y **Vite**, utilizado como base para prácticas del curso de **Introducción a Devops, Contenedores y Kubernetes**.
El enfoque principal es integrar un pipeline CI/CD en GitHub Actions, generar una imagen de la aplicación en DockerHub y desplegar la aplicación mediante un contenedor Docker administrado por Kubernetes.

---

## 📦 Tecnologías principales

* **Vue 3**
* **Vite**
* **Docker**
* **GitHub Actions (CI/CD)**
* **Kubernetes (Rolling Update)**
* **DevOps Workflow**

## 🐳 Construir la imagen Docker

```bash
docker build -t my-devops-vue:latest .
docker run -p 5173:80 my-devops-vue:latest
```

## ⚙️ Pipeline CI/CD (GitHub Actions)

Este repositorio incluye un pipeline automatizado que:

1. **Se ejecuta al hacer push en `main`**
2. Lee la versión desde `package.json`
3. Construye y publica una imagen Docker en Docker Hub:

   * `latest`
   * `versión específica`, por ejemplo: `1.0.4`
4. Clona un repositorio de configuración (`root-team-devops-config`)
5. Actualiza automáticamente la versión de la imagen en el deployment de Kubernetes
6. Commitea el cambio en dicho repositorio

## 📝 Enlaces importantes

**Repositorio Github de la app**: https://github.com/rodric24/root-team-devops-project
**Repositorio Github de los settings**: https://github.com/rodric24/root-team-devops-config
**DockerHub**: https://hub.docker.com/repository/docker/rodric24/root-team-devops-project

## 🔐 Variables y secretos necesarios en GitHub

En `Settings > Secrets and variables > Actions` debes definir:

| Secreto              | Descripción                                      |
| -------------------- | ------------------------------------------------ |
| `DOCKERHUB_USERNAME` | Usuario de Docker Hub                            |
| `DOCKERHUB_TOKEN`    | Token para push                                  |
| `REPO_ACCESS_TOKEN`  | Token con acceso al repo root-team-devops-config |

## 📝 Versionado

La versión de la app se administra desde:

```
package.json → "version"
```

El pipeline toma automáticamente este valor para etiquetar las imágenes.

