/**
 * Community Lab Alliance - Backend API
 * Análisis de Necesidades
 */

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'cla-analisis-necesidades-api' });
});

// Placeholder: ejecutar análisis (aquí conectarías con datos reales)
app.post('/api/analisis/ejecutar', (req, res) => {
  const config = req.body;
  // TODO: validar config, consultar datos, generar resultados
  res.json({
    success: true,
    message: 'Análisis en desarrollo',
    config: config,
  });
});

// Placeholder: guardar análisis
app.post('/api/analisis/guardar', (req, res) => {
  const payload = req.body;
  // TODO: persistir en base de datos
  res.json({
    success: true,
    id: `analisis-${Date.now()}`,
    message: 'Guardado en desarrollo',
  });
});

app.listen(PORT, () => {
  console.log(`Backend CLA escuchando en http://localhost:${PORT}`);
});
