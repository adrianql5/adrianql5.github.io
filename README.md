# Adrián Quiroga Portfolio

Portfolio personal construido con React, Vite y Tailwind CSS para presentar perfil, trayectoria y proyectos.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS 4
- React Router
- Motion
- Lucide React

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

`npm run dev` arranca el entorno local en `http://localhost:3000`.

## Estructura Principal

```text
src/
  assets/
    projects/         # capturas de proyectos
  components/         # layout, modal y piezas reutilizables
  data/
    projects.json     # fuente de datos de la sección de proyectos
  lib/
    projects.ts       # resolución de imágenes y helpers de proyecto
  pages/              # páginas principales
  site.ts             # datos globales del portfolio
```

## Cómo Añadir O Editar Proyectos

La sección de proyectos se alimenta desde [src/data/projects.json](src/data/projects.json).

1. Copia la imagen a `src/assets/projects/`.
2. Añade o edita la entrada dentro de `featuredProjects`.
3. Si quieres un proyecto secundario, añádelo en `otherProjects`.

Ejemplo:

```json
{
  "id": "mi-proyecto",
  "category": "Web / Tooling",
  "title": "Mi Proyecto",
  "desc": "Resumen corto del proyecto.",
  "repoUrl": "https://github.com/usuario/repositorio",
  "liveUrl": "https://mi-demo.example.com",
  "visualKind": "image",
  "visualValue": "mi-proyecto.png",
  "visualFit": "cover",
  "visualPosition": "center",
  "visualBackdrop": "#101820",
  "tags": ["React", "TypeScript"],
  "year": "2026",
  "highlights": [
    "Primer punto relevante.",
    "Segundo punto relevante.",
    "Tercer punto relevante."
  ]
}
```

### Campos útiles

- `repoUrl`: enlace al repositorio del proyecto.
- `liveUrl`: demo o despliegue público. Si existe, el modal muestra un botón para abrirlo.
- `visualKind`: `image` o `color`.
- `visualValue`: nombre del archivo en `src/assets/projects/` o un color si `visualKind` es `color`.
- `visualFit`: `cover` o `contain`.
- `visualPosition`: permite ajustar el encuadre de la captura.
- `visualBackdrop`: color de fondo de apoyo cuando usas `contain`.

## Build

La build de producción se genera con:

```bash
npm run build
```

El resultado queda en `dist/`.

## Despliegue

El proyecto está preparado para publicarse como portfolio personal en GitHub Pages.
