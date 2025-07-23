/**
 * @fileoverview Servidor Express para Boost Agency
 * 
 * Este servidor proporciona la API backend para la aplicación Angular,
 * manejando contenido dinámico, carga de archivos y servir la aplicación frontend.
 * 
 * @author Boost Agency Development Team
 * @version 1.0.0
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3000;  // Puerto configurable por variable de entorno

// Configuración de middleware
app.use(cors());  // Habilitar CORS para peticiones cross-origin
app.use(express.json());  // Parsear JSON en el body de las peticiones
app.use(express.urlencoded({ extended: true }));  // Parsear datos de formularios

/**
 * Configuración de Multer para carga de archivos
 * 
 * Almacena archivos en el directorio 'uploads' con nombres únicos
 * basados en timestamp para evitar conflictos
 */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'uploads/'))  // Directorio de destino
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)  // Nombre único con timestamp
    }
});

const upload = multer({ storage: storage });

// Servir archivos estáticos desde el directorio uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/**
 * RUTAS DE LA API
 */

/**
 * GET /api/contenido
 * Obtiene el contenido dinámico del sitio web
 * 
 * @returns {Object} Contenido JSON del sitio
 */
app.get('/api/contenido', (req, res) => {
    try {
        const contenido = require('./content/contenido.json');
        res.json(contenido);
    } catch (error) {
        res.status(500).json({ error: 'Error al cargar el contenido' });
    }
});

/**
 * POST /api/contenido
 * Actualiza el contenido del sitio web (funcionalidad administrativa)
 * 
 * @returns {Object} Respuesta de éxito
 */
app.post('/api/contenido', (req, res) => {
    // Aquí normalmente se guardaría en una base de datos
    // Por ahora, solo retornamos éxito
    res.json({ success: true });
});

/**
 * POST /api/upload
 * Sube un archivo al servidor
 * 
 * @param {File} file - Archivo a subir (usando multer)
 * @returns {Object} Respuesta con información del archivo subido
 */
app.post('/api/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.json({ 
        success: true,
        file: `/uploads/${req.file.filename}`  // Ruta del archivo subido
    });
});

/**
 * CONFIGURACIÓN PARA PRODUCCIÓN
 * 
 * Sirve la aplicación Angular compilada y maneja el enrutamiento del frontend
 */

// Servir archivos estáticos de la aplicación Angular compilada
app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')));

// Ruta catch-all para el enrutamiento del frontend (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'));
});

/**
 * Iniciar el servidor
 * 
 * Escucha en el puerto configurado y muestra mensaje de confirmación
 */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
