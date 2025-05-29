# 👨‍💻 TecoByte

## 👥 Integrantes

- Batallón Costa, Juan Pablo
- Enriquez, Leandro
- Fragueiro, Luciana
- Jacob, Elías David
- Ortiz, Eduardo Javier
- Salinas, Agustín
- Tomio, Maximiliano David

---

## 📝 Quiz del Miércoles 28 de mayo de 2025

### **1. ¿Cuál de las siguientes es una etiqueta estática que NO cambia en HTML?**

Opciones:

a.

```html
<title>Tu Gran sitio Web</title>
</head>
<body>
<h1>Ideas web</h1>
<section id="seleccionar-producto">
  <h2>Elige tus productos</h2>
</section>
```

b.

```html
<section id="seleccionar-comprar">
  <h2>Ir a pagar</h2>
  <p>Tu compra tiene <span>3</span> productos</p>
</section>
```

c. Todas las respuestas  
d. Ninguna de las respuestas  
e. Esto planteado NO sucede nunca en HTML

✅ **Respuesta correcta:** `a`

> Una etiqueta estática es aquella cuyo contenido no cambia, a menos que el desarrollador lo modifique manualmente. En cambio, el `<span>` en la opción b podría actualizarse dinámicamente con JavaScript.

---

### **2. ¿Qué debemos recordar al crear un botón en HTML para usarlo desde JS?**

Opciones:

a. La línea donde está creado el botón en HTML  
b. Todas las respuestas  
c. El `id` que ponemos en HTML para usarlo luego en JS  
d. Ninguna de las respuestas  
e. No hay nada que recordar, simplemente se empieza a trabajar con JS

✅ **Respuesta correcta:** `c`

> Lo más importante es establecer un `id` (o clase) que permita seleccionar el botón en JavaScript con `document.getElementById()` o `querySelector()`.

---

### **3. ¿Dónde se debe ubicar la referencia al archivo JS con `<script>`?**

Opciones:

a. Va al comienzo del `<body>`  
b. Se abre una etiqueta `<script>` y se pone todo allí  
c. No hace falta poner un script para tal archivo  
d. Todas las respuestas  
e. La respuesta no está en las opciones: (escribe tu respuesta)

✅ **Respuesta correcta:** `e`

> Lo ideal es colocar el `<script src="archivo.js">` **justo antes de cerrar el `</body>`**, para que todo el contenido HTML esté cargado antes de ejecutar JS.  
> Alternativamente, si va en el `<head>`, se debe agregar el atributo `defer`:

```html
<script src="archivo.js" defer></script>
```

---

🧠 ¡Buen trabajo equipo TecoByte!
