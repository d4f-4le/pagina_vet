# Huellas Clínica Veterinaria — Proyecto de ciclo

Proyecto web para una clínica veterinaria ficticia, desarrollado con base en
la plantilla de Themeforest:

**Plantilla de referencia:** Petzorg — Veterinary & Pet Care Clinic WordPress Theme
https://themeforest.net/item/petzorg-veterinary-pet-care-clinic-wordpress-theme/56415165

Se replicó su diagramación tipo landing page, la paleta cálida orientada al
cuidado animal y la estructura de secciones (hero, servicios, equipo,
testimonios, planes, contacto), adaptando textos, imágenes y colores a un
desarrollo propio en React y Tailwind.

## Estructura del proyecto

```
proyecto-veterinaria/
├── database/
│   └── veterinaria.sql        Script de creación y carga de la base de datos
├── backend-php/
│   ├── conexion.php           Conexión a MySQL/MariaDB
│   ├── pacientes.php          Servicio web (JSON)
│   └── index.php              Mismo servicio, como punto de entrada
└── frontend/                  Aplicación React + Tailwind (Vite)
```

## 1. Base de datos

Importa `database/veterinaria.sql` en tu panel de MySQL de AlwaysData
(phpMyAdmin). Crea la tabla `pacientes_atendidos` con 7 columnas y 12
registros de mascotas atendidas.

## 2. Servicio web PHP (despliegue en AlwaysData)

1. Sube `conexion.php` y `pacientes.php` (o `index.php`) a tu sitio PHP en
   AlwaysData.
2. En `conexion.php`, reemplaza `$servidor`, `$usuario`, `$clave` y
   `$basedatos` por los datos reales de tu base de datos en AlwaysData.
3. Verifica que el servicio responda en:
   `https://tuusuario.alwaysdata.net/pacientes.php`

## 3. Frontend React + Tailwind (despliegue en Netlify)

1. Dentro de `frontend/`, edita `src/components/Pacientes.tsx` y reemplaza
   la constante `URL_SERVICIO` por la URL real de tu servicio PHP publicado
   en AlwaysData.
2. Instala dependencias y compila:
   ```
   npm install
   npm run build
   ```
3. Sube el proyecto a Netlify (arrastrando la carpeta `dist` generada, o
   conectando el repositorio de GitHub) y configura como comando de build
   `npm run build` y como carpeta de publicación `dist`.

## Entregables del proyecto

1. **Servicio web:** URL del script PHP publicado en AlwaysData.
2. **Plantilla de referencia:** https://themeforest.net/item/petzorg-veterinary-pet-care-clinic-wordpress-theme/56415165
3. **Sitio web:** URL del sitio React/Tailwind publicado en Netlify.
