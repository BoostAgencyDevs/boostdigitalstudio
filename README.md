# BoostAgency

BoostAgency es un sitio web CMS responsivo desarrollado en Angular y Tailwind CSS, diseñado para ofrecer una experiencia visual moderna, profesional y perfectamente adaptable a cualquier dispositivo. El proyecto implementa las mejores prácticas de responsividad, estructura y mantenibilidad, siguiendo la estética y experiencia de usuario de BoostAgency.

## 🚀 Descripción
- **Framework:** Angular 16+
- **Estilos:** Tailwind CSS (JIT, utilidades modernas, breakpoints avanzados)
- **Arquitectura:** Módulos lazy load, estructura escalable, código limpio
- **Responsividad:** Optimización visual para mobile, tablet, laptop, desktop y 4K

## 🛠️ Requisitos técnicos
- Node.js v18+
- Angular CLI v16+
- npm v9+
- Tailwind CSS v3+

## ⚙️ Instrucciones de desarrollo local
1. Clona el repositorio:
   ```bash
   git clone <REPO_URL>
   cd <REPO_FOLDER>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Corre el servidor de desarrollo:
   ```bash
   ng serve
   ```
4. Abre tu navegador en [http://localhost:4200](http://localhost:4200)

## 🏗️ Despliegue en Netlify
1. Compila el proyecto para producción:
   ```bash
   ng build --configuration production
   ```
2. Sube el contenido de `/dist/` a Netlify (o conecta el repo y configura el build).
3. Asegúrate de que el output folder sea `/dist/<nombre-proyecto>`.

## 📦 Detalles técnicos recientes
- **Integración API actualizada:** Los formularios de contacto y cotización/asesoría ahora consumen la API correspondiente (POST /api/quote y POST /api/support) usando los servicios de `shared/services`.
- **Paddings laterales optimizados:** Todas las secciones usan `px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12` para un diseño compacto y balanceado.
- **Ancho máximo:** Uso de `max-w-screen-2xl` para limitar el contenido y evitar desbordes en pantallas grandes.
- **Centrado global:** `container mx-auto` en todas las franjas y bloques principales.
- **Ajustes visuales:** Microajustes de gaps, paddings, tipografías y proporciones para armonía visual total.
- **No se ha modificado la lógica Angular ni la estructura general del código.**

## 👥 Créditos y observaciones
- Proyecto desarrollado por el equipo BoostAgency.
- Si agregas nuevas secciones, sigue la guía de estilos en `/docs/tailwind-helpers.md`.
- Para dudas o mejoras, contacta al equipo técnico.

## Estilo de botones (BoostAgency)

Todos los botones del sitio usan un diseño profesional y consistente basado en Tailwind CSS:
- Clases principales: `w-60 h-14 px-6 py-2 rounded-full flex items-center justify-center bg-[#1C1A1C] text-white font-semibold text-base transition-all duration-500 ease-in-out border border-transparent hover:bg-gradient-to-tr hover:from-[#f05f02] hover:to-orange-600 hover:shadow-[0_0_20px_4px_rgba(240,95,2,0.6)] hover:-translate-y-1 hover:scale-105 hover:text-white focus:text-white active:text-white`
- El diseño es responsivo, moderno y visualmente atractivo.
- **Excepción:** El botón del header principal mantiene su propio estilo personalizado: fondo naranja (`bg-[#f05f02]`), hover gris oscuro, sombra blanca suave.
- No se usan archivos `.scss` ni lógica Angular para los estilos de botones, solo utilidades Tailwind en los `.component.html`.

## 📎 Guía para agregar enlaces seguros

Consulta el archivo [`docs/enlaces-seguros.md`](docs/enlaces-seguros.md) para conocer las mejores prácticas al agregar nuevos enlaces o botones en BoostAgency. Esta guía explica cómo evitar rutas vacías o inactivas, cómo integrar correctamente los enlaces con Angular Router (`routerLink`), y cómo manejar enlaces temporales apuntando a `/404` si la ruta aún no existe.

Seguir estas recomendaciones es fundamental para garantizar una experiencia de usuario profesional, evitar errores de navegación y mantener la coherencia visual y funcional del sitio. En el documento encontrarás ejemplos claros de enlaces correctos e incorrectos, así como instrucciones para enlaces internos y externos. Revisa siempre la guía antes de implementar nuevos enlaces para asegurar la calidad y seguridad del proyecto. 