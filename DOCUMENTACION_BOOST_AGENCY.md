# 📋 DOCUMENTACIÓN COMPLETA - PROYECTO BOOST AGENCY

## 🏗️ 1. ESTRUCTURA GENERAL DEL PROYECTO

```
Pagina_Johana/
├── 📁 frontend/                    # Aplicación Angular (Cliente)
│   ├── 📁 src/
│   │   ├── 📁 app/
│   │   │   ├── 📁 pages/          # Componentes de páginas
│   │   │   ├── 📁 shared/         # Servicios compartidos
│   │   │   └── 📁 layout/         # Componente de layout
│   │   ├── 📁 assets/             # Imágenes, logos, fuentes
│   │   └── 📁 environments/       # Configuración de entornos
│   ├── 📄 angular.json            # Configuración de Angular
│   ├── 📄 package.json            # Dependencias del frontend
│   ├── 📄 tailwind.config.js      # Configuración de Tailwind CSS
│   └── 📄 styles.css              # Estilos globales
│
├── 📁 backend/                     # API Node.js + Express (Servidor)
│   ├── 📁 content/                 # Archivos JSON de datos
│   │   ├── 📁 formularios/        # Formularios de contacto
│   │   ├── 📄 blog.json           # Contenido del blog
│   │   ├── 📄 contenido.json      # Contenido general
│   │   ├── 📄 fundacion.json      # Contenido de fundación
│   │   ├── 📄 planes.json         # Contenido de planes
│   │   ├── 📄 servicios.json      # Contenido de servicios
│   │   └── 📄 tienda.json         # Contenido de tienda
│   ├── 📁 uploads/                 # Carpeta para subidas de archivos
│   ├── 📄 server.js               # Servidor principal
│   └── 📄 package.json            # Dependencias del backend
│
├── 📄 package.json                 # Dependencias raíz
├── 📄 netlify.toml                # Configuración de despliegue Netlify
└── 📄 tailwind.config.js          # Configuración Tailwind raíz
```

---

## 🎨 2. FRONTEND (Angular)

### **Información del Proyecto:**
- **Nombre del proyecto:** `frontend` (según angular.json)
- **Versión Angular:** 17.0.0
- **Framework CSS:** Tailwind CSS 3.4.17
- **PostCSS:** Configurado con autoprefixer

### **Archivos de Configuración:**
- **`angular.json`:** Ubicado en `frontend/angular.json`
- **`package.json`:** Ubicado en `frontend/package.json`
- **`tailwind.config.js`:** Ubicado en `frontend/tailwind.config.js`
- **`postcss.config.js`:** Ubicado en `frontend/postcss.config.js`
- **`styles.css`:** Ubicado en `frontend/src/styles.css`
- **`tsconfig.json`:** Configuración TypeScript principal
- **`tsconfig.app.json`:** Configuración TypeScript para la aplicación

### **Estructura de Componentes:**
```
frontend/src/app/pages/
├── 📁 boostcast/          # Componente Boostcast
├── 📁 contacto/           # Componente de Contacto
├── 📁 formularios/        # Componente de Formularios (NUEVO)
├── 📁 fundacion/          # Componente de Fundación
├── 📁 futuro/             # Componente Futuro
├── 📁 inicio/             # Componente de Inicio (Página principal)
├── 📁 nosotros/           # Componente Nosotros
├── 📁 planes/             # Componente de Planes
├── 📁 servicios/          # Componente de Servicios
└── 📁 tienda/             # Componente de Tienda
```

### **Servicios Compartidos:**
```
frontend/src/app/shared/services/
├── 📄 contenido.service.ts    # Servicio de contenido
├── 📄 mock-data.service.ts    # Servicio de datos mock
└── 📄 formulario.service.ts   # Servicio de formularios (NUEVO)
```

### **Actualización de integración API (Contacto y Formularios)**
- El componente de contacto ahora consume la API correspondiente para el envío de datos de contacto.
- El componente de formularios consume la API correspondiente para cotización y asesoría (POST /api/quote y POST /api/support).
- Los servicios en `shared/services` fueron actualizados para manejar estas integraciones.
- No se modificó la estructura visual ni la responsividad, solo la integración de datos.

### **Assets y Recursos:**
- **Ubicación:** `frontend/src/assets/`
- **Imágenes:** `frontend/src/assets/images/`
  - `Foto_jhoana.svg` - Foto de la CEO
  - `hero-image.svg` - Imagen del hero
  - `Logo_Principal.png` - Logo principal
  - `foto_grupal.png` - Foto del equipo

### **Generación del Build:**
```bash
# Comando para generar el build
ng build

# Ubicación del build generado
dist/frontend/browser/

# Para producción
ng build --configuration production
```

---

## ⚙️ 3. BACKEND (Node.js + Express)

### **Archivo Principal:**
- **`server.js`:** Ubicado en `backend/server.js`

### **Rutas API Principales:**
```
GET  /api/contenido              # Obtener contenido general
POST /api/contenido              # Actualizar contenido (admin)
POST /api/quote                  # Envío de formulario de cotización (ACTUALIZADO)
POST /api/support                # Envío de formulario de asesoría (ACTUALIZADO)
POST /api/upload                 # Subida de archivos
```

### **Archivos de Datos (JSON):**
```
backend/content/
├── 📄 contenido.json       # Contenido general del sitio
├── 📄 blog.json           # Entradas del blog
├── 📄 servicios.json      # Información de servicios
├── 📄 planes.json         # Planes y precios
├── 📄 fundacion.json      # Información de fundación
├── 📄 tienda.json         # Productos de la tienda
└── 📁 formularios/
    ├── 📄 leads.json      # Datos de leads
    └── 📄 soporte.json    # Tickets de soporte
```

### **Carpeta de Subidas:**
- **Ubicación:** `backend/uploads/`
- **Propósito:** Almacenar archivos subidos por usuarios

---

## 🔗 4. CONEXIÓN FRONTEND – BACKEND

### **Servicio de Comunicación:**
- **Archivo:** `frontend/src/app/shared/services/contenido.service.ts`
- **Método:** HttpClient de Angular

### **Configuración de Entorno:**
```typescript
// frontend/src/environments/environment.ts (DESARROLLO)
export const environment = {
  production: false,
  apiUrl: 'http://api-nodejs-production-f88a.up.railway.app/api'  // ACTUALIZADO
};

// frontend/src/environments/environment.prod.ts (PRODUCCIÓN)
export const environment = {
  production: true,
  apiUrl: 'https://api.boostagency.com/api/'  // URL de producción
};
```

### **Métodos del Servicio:**
```typescript
// Obtener contenido general
getContenido(): Observable<any>

// Obtener contenido específico
getSeccionContenido(seccion: string): Observable<any>

// Actualizar contenido (admin)
updateContenido(seccion: string, content: any): Observable<any>

// Subir archivos
uploadImage(file: File): Observable<any>
```

### **Servicio de Formularios (NUEVO):**
```typescript
// frontend/src/app/shared/services/formulario.service.ts
enviarCotizacion(data: any): Observable<any>  // POST /api/quote
enviarAsesoria(data: any): Observable<any>    // POST /api/support
```

---

## 🎨 5. DISEÑO Y ESTILOS

### **Paleta de Colores Principal:**
- **Color Principal:** `#f05f02` (Naranja Boost)
- **Color Hover:** `#d94f01` (Naranja más oscuro)
- **Color de Fondo:** `#000000` (Negro puro)
- **Color de Texto:** `#FFFFFF` (Blanco puro)
- **Color de Texto Secundario:** `#CCCCCC` (Gris claro)

### **Clases CSS Personalizadas:**
```css
.btn-boost {
  @apply bg-[#f05f02] hover:bg-[#d94f01] text-white uppercase tracking-wider px-8 py-3 rounded-full font-bold text-base transition-all duration-300;
}
```

### **Animaciones Implementadas:**
- **Fade In:** `animate-fade-in`
- **Fade In Up:** `animate-fade-in-up`
- **Fade In Down:** `animate-fade-in-down`
- **Slide Up:** `animate-slide-up`
- **Zoom In:** `animate-zoom-in`
- **Entrance:** `animate-entrance`
- **Float:** `animate-float`
- **Bounce Soft:** `animate-bounce-soft`

### **Efectos de Tarjetas:**
```css
.card {
  @apply bg-dark-900 rounded-2xl p-6 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-dark-xl;
}
```

### **Fuente Principal:**
- **Familia:** Montserrat (Google Fonts)
- **Pesos:** 300, 400, 500, 600, 700, 800

---

## 🚀 6. OBSERVACIONES Y COMANDOS

### **Iniciar el Backend:**
```bash
cd backend
npm install
npm start          # Inicia el servidor en puerto 3000
# o
npm run dev        # Modo desarrollo con nodemon
```

### **Iniciar el Frontend:**
```bash
cd frontend
npm install
ng serve           # Inicia en http://localhost:4200
# o
npm start          # Alias para ng serve
```

### **Generar Build para Producción:**
```bash
cd frontend
ng build --configuration production
```

### **Despliegue en Netlify:**
- **Directorio a subir:** `frontend/dist/frontend/browser/`
- **Comando de build:** `ng build --configuration production`
- **Configuración:** `netlify.toml`

### **Puertos por Defecto:**
- **Frontend:** `http://localhost:4200`
- **Backend:** `http://localhost:3000`

### **Dependencias Principales:**
- **Frontend:** Angular 17, Tailwind CSS 3.4.17, RxJS 7.8.0
- **Backend:** Express 4.18.2, CORS 2.8.5, Multer 1.4.5

---

## 📝 7. PÁGINA DE FORMULARIOS

### **Descripción**
Página que contiene dos formularios secuenciales: uno para solicitar cotizaciones específicas y otro para acceder a asesoría gratuita.

### **Ruta**
- **Frontend**: `/formularios`
- **Backend**: 
  - `/api/quote` (POST) - Formulario de cotización
  - `/api/support` (POST) - Formulario de asesoría

### **Componentes**
- **FormulariosComponent**: Componente principal ubicado en `frontend/src/app/pages/formularios/`
- **FormulariosModule**: Módulo con ReactiveFormsModule, CommonModule y RouterModule

### **Funcionalidades**

#### **Formulario 1: Cotización Específica**
- **Estructura de datos:**
  ```typescript
  {
    leadsData: {
      names: string,
      lastnames: string,
      mobile: string,
      email: string,
      company?: string
    },
    budgetsData: {
      min_amount: number,
      max_amount: number,
      is_unsure: boolean
    },
    goalsData: {
      increase_sales: boolean,
      boost_brand_visibility: boolean,
      generate_leads: boolean,
      launch_new_product: boolean,
      improve_digital_positioning: boolean,
      other?: string
    },
    websitesData: {
      url1?: string,
      url2?: string,
      url3?: string
    },
    social_mediaData: {
      facebook?: string,
      twitter?: string,
      instagram?: string,
      linkedin?: string,
      tiktok?: string,
      youtube?: string
    },
    servicesData: {
      web_design: boolean,
      branding: boolean,
      social_media_management: boolean,
      google_ads: boolean,
      social_media_advertising: boolean,
      sales_funnels: boolean,
      automation: boolean,
      crm: boolean,
      chatbot: boolean,
      other?: string
    },
    commentsQuoteData: {
      comment?: string
    }
  }
  ```

#### **Formulario 2: Asesoría Gratuita**
- **Estructura de datos:**
  ```typescript
  {
    leadsData: {
      names: string,
      lastnames: string,
      mobile: string,
      email: string,
      company?: string
    },
    challengesData: {
      low_sales: boolean,
      no_digital_presence: boolean,
      no_advertising_knowledge: boolean,
      no_strategy: boolean,
      other?: string
    },
    digitalPresenceData: {
      has_website: boolean,
      has_social_media: boolean,
      wants_new_start: boolean
    },
    commentsSupportData: {
      comment?: string
    }
  }
  ```

### **Características Técnicas**
- **Validación:** ReactiveFormsModule con validadores personalizados
- **Estados de carga:** Indicadores visuales durante el envío
- **Manejo de errores:** Mensajes específicos del backend
- **Responsividad:** Diseño completamente responsivo
- **Flujo secuencial:** El segundo formulario aparece tras éxito del primero

### **Manejo de Respuestas del Backend:**
```typescript
// Posibles respuestas:
{
  success: boolean,    // Éxito de la operación
  error?: string,      // Mensaje de error específico
  blocked?: boolean    // Demasiadas peticiones
}
```

### **Página de Formularios: Cambios recientes en UI**
- El botón "Ver más / Ver menos" ahora está perfectamente centrado en la página de formularios.
- Este botón utiliza exactamente el mismo estilo, animación y clases que los botones principales de la página de inicio (fondo oscuro, gradiente naranja al hacer hover, sombra y efecto de escala), garantizando coherencia visual en todo el sitio.
- Se eliminó el borde animado personalizado para este botón, siguiendo la línea visual de los botones principales.
- No se modificó la lógica, estructura ni responsividad del formulario.

---

## 🔧 8. CONFIGURACIÓN DE DESPLIEGUE

### **Netlify (Frontend):**
```toml
# netlify.toml
[build]
  base = "frontend"
  publish = "dist/frontend/browser"
  command = "npm install && npx ng build --configuration production"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### **Railway (Backend):**
- **URL de producción:** `https://api-nodejs-production-f88a.up.railway.app`
- **Puerto:** Configurado por variable de entorno
- **CORS:** Habilitado para dominio de Netlify

---

## ✅ 9. ESTADO ACTUAL DEL PROYECTO

### **Funcionalidades Implementadas:**
- ✅ Todas las rutas funcionan correctamente
- ✅ Navegación fluida y SPA operativa
- ✅ Formularios funcionando con validaciones completas
- ✅ Backend operativo y conectado a Railway
- ✅ Estilos unificados con `.btn-boost`
- ✅ Sitio 100% responsive
- ✅ Animaciones y efectos implementados
- ✅ Documentación interna completa
- ✅ Proyecto listo para producción

### **Mejoras Recientes:**
- ✅ Documentación interna completa en todos los archivos
- ✅ Configuración de despliegue optimizada
- ✅ Manejo de errores mejorado en formularios
- ✅ Estructura de datos estandarizada
- ✅ Animaciones y efectos visuales implementados

---

¡Gracias por usar BOOST AGENCY! 🚀 