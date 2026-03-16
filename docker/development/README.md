# Docker development
Este contenedor ejecuta la aplicación en **modo desarrollo con hot reload**.
El código fuente local se monta como volumen dentro del contenedor, lo cual permite modificar archivos y ver cambios automáticamente.

# Requesitos

* Docker
* Docker Compose

# Levantar entorno de desarrollo

Desde la raíz del proyecto ejecutar:

```
docker compose -f docker/development/compose.yml up
```

La aplicación estará disponible en:

```
http://localhost:3000
```

---

# Detener contenedor

```
docker compose -f docker/development/compose.yml down
```
# Ejecutar comandos dentro del contenedor

Ejemplo migraciones:

```
docker compose -f docker/development/compose.yml exec app npx prisma migrate dev
```

```
docker compose -f docker/development/compose.yml exec app npx prisma generate
```