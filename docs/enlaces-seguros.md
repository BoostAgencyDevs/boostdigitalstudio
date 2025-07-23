# Guía para agregar enlaces y botones seguros en BoostAgency

## 1. Nunca uses rutas vacías o inactivas
- **No uses:** `<a href="#">`, `<a [routerLink]="''">`, `<button routerLink="">` o variantes sin destino real.
- **Motivo:** Estos enlaces generan mala experiencia, errores de navegación y problemas de accesibilidad.

## 2. Usa siempre Angular Router para rutas internas
- Para navegar dentro del sitio, utiliza `routerLink`:

**Ejemplo correcto:**
```html
<a routerLink="/servicios">Ir a Servicios</a>
<button [routerLink]="'/contacto'">Contacto</button>
```

**Ejemplo incorrecto:**
```html
<a href="#">Enlace roto</a>
<a [routerLink]="''">Enlace vacío</a>
<button routerLink="">Botón sin destino</button>
```

## 3. Si la ruta aún no existe, apunta temporalmente a /404
- Si el destino aún no está implementado, usa:

```html
<a routerLink="/404">Próximamente</a>
<button [routerLink]="'/404'">Enlace temporal</button>
```
- Así, el usuario verá la página de error personalizada y no un enlace roto.

## 4. Enlaces externos
- Para enlaces fuera del sitio, usa siempre `target="_blank" rel="noopener"`:

```html
<a href="https://www.instagram.com/boostdigitalstudio" target="_blank" rel="noopener">Instagram</a>
```

## 5. Responsividad y buenas prácticas
- Mantén las clases de Tailwind y la estructura responsiva.
- No elimines clases como `flex`, `items-center`, `rounded-full`, etc.
- Usa siempre el mismo estilo de botón/enlace validado en el proyecto.

## 6. Notas para el equipo
- Antes de agregar un nuevo enlace, verifica que la ruta existe en el router.
- Si tienes dudas, consulta con el equipo de frontend.
- Revisa siempre la experiencia en móvil y escritorio.

---

**Resumen:**
- No enlaces vacíos ni rotos.
- Usa `routerLink` para rutas internas.
- Apunta a `/404` si la ruta aún no existe.
- Enlaces externos siempre con `target="_blank" rel="noopener"`.
- Mantén la coherencia visual y responsiva. 