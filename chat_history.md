# Historial de Conversación y Contexto para Agente Antigravity

**Para el agente de la otra computadora:** Hola, colega. Soy tu predecesor. El usuario está tomando un curso de Desarrollo Web desde cero interactivo conmigo. A continuación te detallo todo el contexto, las reglas obligatorias que debes seguir, y el historial de lo que hemos hecho para que puedas retomar la clase exactamente donde la dejamos.

---

## 1. REGLAS Y CONTEXTO DEL USUARIO (¡MUY IMPORTANTE!)

### Regla 1: Anti-Vibecoding y Pedagogía
- El usuario es estudiante de Ingeniería de Software. Está en transición hacia entender todo a fondo.
- **Formato del curso:** Enseña **EXACTAMENTE UN TEMA POR MENSAJE**. No te adelantes. Cada lección debe contener: una explicación clara, una analogía de la vida real, código de ejemplo, y una "Mini-Tarea" que el usuario deba hacer en su código. Debes esperar a que el usuario complete la mini-tarea y te confirme para poder avanzar.
- Siempre felicítalo por sus logros y corrige sus errores con paciencia.

### Regla 2: Segundo Cerebro en Obsidian (Global Rule)
- El usuario usa Obsidian (`C:\Users\PC_1\Desktop\Obsidian`) con el método Zettelkasten.
- **Obligación:** Antes de darle la lección de un tema nuevo, **tú debes crear proactivamente el archivo `.md` de la lección en su bóveda de Obsidian** y enlazarlo al índice (`00_Indice_Aprendiendo_Web.md`).
- El usuario reorganizó su Obsidian recientemente. El índice ahora vive en: `01_Proyectos/Aprendiendo Desarrollo web/00-Overview/00_Indice_Aprendiendo_Web.md`. Las notas de las lecciones viven en `01_Proyectos/Aprendiendo Desarrollo web/03-Conceptos/`.
- **Frontmatter obligatorio para Obsidian:**
  ```yaml
  ---
  title: "Título de la lección"
  date_created: AAAA-MM-DD
  date_modified: AAAA-MM-DD
  type: permanente
  status: completado
  tags: [programacion, web, etc]
  project: "Aprendiendo Desarrollo web"
  madurez: 🌱 semilla
  ---
  ```

---

## 2. ESTADO DEL CURRÍCULO

El curso consta de 5 fases. Así vamos:
- ✅ **Fase 1: HTML** (Estructura base, semántica, formularios).
- ✅ **Fase 2: CSS** (Selectores, Box Model, Flexbox, CSS Grid, Media Queries, Variables CSS).
- ✅ **Fase 3: JavaScript** (Variables, Condicionales, Bucles, Funciones, el DOM, Eventos, Validación de formularios).
- 🔄 **Fase 4: Integración** (En progreso).
- ⏳ **Fase 5: Proyecto Final** (Pendiente).

---

## 3. HISTORIAL CRONOLÓGICO Y CÓDIGO (Qué pasó y problemas resueltos)

### Fase 1 y Fase 2 (HTML y CSS)
- El usuario construyó un `portafolio.html` con un `<header>`, `<main>` (con dos tarjetas: sobre mí y un `<form>` de contacto), y un `<footer>`.
- **Iniciativa del usuario:** En CSS, el usuario creó por su cuenta un sistema de variables profesionales (`--color-fondo`, `--texto`, `--tarjetas`, `--resaltar`, etc.) y diseñó un tema visual asombroso. Usó CSS Grid (`1fr 1fr`) para hacer las tarjetas de contenido y contacto lado a lado, y una Media Query para que se apilen en móviles.

### Fase 3 (JavaScript)
- **El reto de Funciones:** El usuario tuvo un error de tipeo (`calcuclarDoble` vs `calcularDoble`) y puso un `return` suelto en el ámbito global (fuera de la función). Se le explicó con la analogía de la "máquina de hacer jugo" que el `return` solo vive adentro, y lo solucionó.
- **El DOM:** El usuario quedó fascinado usando la consola para ejecutar `document.body.style.backgroundColor = "red";`.
- **El reto de Validación (Mini-proyecto Fase 3):** El usuario intentó validar el nombre, apellido y correo al mismo tiempo usando el operador `&&`. 
  - *Problema:* Creó 3 `addEventListener("click")` en el mismo botón. Uno de ellos intentaba usar una variable que había sido borrada (`textoEscrito`), causando un `ReferenceError` y que el código explotara.
  - *Solución:* Se le explicó que múltiples eventos en un botón pueden chocar, y se le enseñó a unificar todo en un solo evento usando validaciones secuenciales (`if/else`) con `return;` para detener la ejecución si algún campo fallaba. 
  - *Resultado:* El usuario lo hizo perfectamente. Si pasa la validación, inyecta estilos y texto de éxito ("¡Gracias por contactarme!") en una etiqueta `<p id="mensaje-exito">` del DOM, previniendo el reinicio de la página con `evento.preventDefault()`.

### Fase 4 (Estado actual - DÓNDE RETOMAR LA CLASE)
- Acabamos de comenzar la **Fase 4**.
- **Tema 1: Organización de carpetas (Arquitectura).**
- Le expliqué por qué no debe tener el CSS y el JS sueltos en la raíz junto al HTML.
- **Misión actual pendiente del usuario:**
  1. Crear una carpeta `/css` y otra `/js` en la raíz de su proyecto.
  2. Mover `styles.css` a la carpeta `/css`.
  3. Mover `app.js` a la carpeta `/js`.
  4. Actualizar las rutas relativas en su `portafolio.html` (`<link href="./css/styles.css">` y `<script src="./js/app.js">`).

## ¿Qué debes hacer al tomar el control?
1. Pregúntale al usuario si logró completar la organización de las carpetas (el Tema 1 de la Fase 4).
2. Si confirma que sí y todo funciona bien, felicítalo y pasa al **Tema 2 de la Fase 4: Despliegue gratuito en Internet** (GitHub Pages o Vercel), enseñándole cómo subir su página para que cualquier persona en el mundo pueda verla.
