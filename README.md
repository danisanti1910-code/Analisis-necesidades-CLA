# Community Lab Alliance - Análisis de Necesidades

Aplicación B2B para configurar y ejecutar análisis de necesidades (wizard + frontend React, API backend).

## Estructura del proyecto

```
Analisis necesidades CLA/
├── frontend/          # React + Vite + lucide-react
│   ├── src/
│   │   ├── components/   # Stepper, Dropdown, CheckboxGroup, etc.
│   │   ├── steps/        # Pasos del wizard (WhatToKnow, Segmentation, etc.)
│   │   ├── styles/       # CSS global y del wizard
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/           # Node.js + Express
│   ├── src/
│   │   └── index.js   # API (health, ejecutar análisis, guardar)
│   └── package.json
└── README.md
```

## Requisitos

- Node.js 18+
- npm (o pnpm/yarn)

## Instalación y ejecución

Necesitas **dos terminales**: una para el backend y otra para el frontend.

### 1. Backend (primera terminal)

```bash
cd backend
npm install
npm run dev
```

Deberías ver: `Backend CLA escuchando en http://localhost:3000`

### 2. Frontend (segunda terminal)

```bash
cd frontend
npm install
npm run dev
```

Deberías ver: `Local: http://localhost:5173/`

### 3. Abrir la aplicación

Abre en el navegador: **[http://localhost:5173](http://localhost:5173)**  
El wizard "Nuevo Análisis" se muestra al cargar.

API en [http://localhost:3000](http://localhost:3000). Endpoints de ejemplo:

- `GET /api/health` — estado del servicio
- `POST /api/analisis/ejecutar` — ejecutar análisis (body: configuración del wizard)
- `POST /api/analisis/guardar` — guardar análisis (pendiente de persistencia)

En desarrollo, Vite hace proxy de `/api` al backend en el puerto 3000.

## Tecnologías

- **Frontend:** React 18, Vite 5, lucide-react
- **Backend:** Express, CORS

## Licencia

Privado - Community Lab Alliance.
