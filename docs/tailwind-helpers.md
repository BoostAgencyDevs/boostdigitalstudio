# Guía de estilos y helpers Tailwind para BoostAgency

## 🏗️ Estructura recomendada para nuevas secciones

```html
<section class="bg-black py-14 sm:py-20 md:py-24 lg:py-28 2xl:py-32">
  <div class="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
    <!-- Contenido aquí -->
  </div>
</section>
```

- Usa `container mx-auto` y paddings laterales escalables para centrar y limitar el contenido.
- Aplica `max-w-screen-2xl` si necesitas limitar aún más el ancho.

## 📐 Ejemplo de layout típico

```html
<div class="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">
  <div class="flex-1">
    <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-4">Título</h2>
    <p class="text-base sm:text-lg md:text-xl text-white/80 mb-6">Descripción...</p>
    <a class="bg-[#f05f02] text-white px-8 py-3 rounded-xl font-semibold shadow transition-all duration-300 hover:bg-white hover:text-[#f05f02] hover:scale-105">Botón</a>
  </div>
  <div class="flex-1 flex items-center justify-center">
    <img src="assets/images/ejemplo.png" class="w-full max-w-[480px] h-auto object-contain drop-shadow-2xl" />
  </div>
</div>
```

## 📏 Buenas prácticas de responsividad
- Usa breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:` para paddings, gaps, textos, etc.
- Imágenes/videos: `w-full`, `max-w-*`, `h-auto`, `aspect-video`, `object-cover` o `object-contain`.
- Textos: `text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl`.
- Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, etc.
- Gaps: `gap-4 md:gap-8 lg:gap-12`.
- Botones: `rounded-xl`, `transition-all`, `hover:scale-105`, etc.

## ⚠️ Indicaciones importantes
- **No modificar lógica Angular ni estructura HTML existente.**
- **No eliminar ni sobrescribir clases Tailwind ya aplicadas si no es indispensable.**
- **Mantén la estética y responsividad global del proyecto.**
- Si tienes dudas, revisa las secciones ya implementadas como referencia. 