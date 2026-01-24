# 🎲 The Board Game 🧠✨  
### Ejercicio Técnico – Landing Page de Juegos de Mesa

🚀 Plataforma web para descubrir y explorar juegos de mesa, desarrollada con **Next.js (App Router)**, enfocada en **experiencia de usuario, rendimiento y buenas prácticas frontend**.

---
🔗 **Demo en vivo:**  
https://the-boar-game-cifu-code.vercel.app
---

## 🧩 Descripción del Desafío

El objetivo es construir una **aplicación web en Next.js** que funcione como un **catálogo interactivo de juegos de mesa**, evaluando:

- 🏗️ Arquitectura en Next.js  
- ⏳ Manejo de estados asíncronos y latencia simulada  
- 🎨 Criterio visual y jerarquía de información  
- 🧠 Buenas prácticas de desarrollo frontend  



---

## 🧠 Tecnologías utilizadas

- **Next.js 16.1.4** (App Router)
- **React**
- **Tailwind CSS**
- **Framer Motion**
- **Vercel**
- **JavaScript (ES6+)**

---
## 🚀 Funcionalidades principales

- ✅ Landing page con Hero y navegación clara
- ✅ Catálogo de juegos con grid responsive
- ✅ Filtros por categoría
- ✅ Rutas dinámicas `/game/[id]`
- ✅ Página de detalle del juego
- ✅ Skeleton loaders (catálogo y detalle)
- ✅ Simulación de latencia real
- ✅ Manejo de errores (`notFound`)
- ✅ Optimización de imágenes con `next/image`
- ✅ Diseño responsive (mobile & desktop)
- ✅ Deploy automático con Vercel
---

## 📂 Estructura del proyecto
src/
├── app/
│ ├── page.jsx
│ ├── layout.js
│ ├── loading.jsx
│ └── game/
│ └── [id]/
│ └── page.jsx
│ └── loading.jsx
│
├── components/
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── GameGrid.jsx
│ ├── GameCard.jsx
│ ├── Filters.jsx
│ ├── GameGridSkeleton.jsx
│ └── GameDetailSkeleton.jsx
│
├── data/
│ └── games.js
| └── sponsors.js

## 🛠️ Instalación y ejecución local

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev


