# 👨‍💻 TecoByte

## 👥 Integrantes

- Batallón Costa, Juan Pablo
- Enriquez, Leandro
- Fragueiro, Luciana
- Jacob, Elías David
- Ortiz, Eduardo Javier
- Salinas, Agustín
- Tomio, Maximiliano David

####

1.Selecciona cuál de las opciones es una etiqueta estática que NO cambia en HTML:
a. <title>Tu Gran sitio Web</title>

</head>
<body>
<h1>Ideas web</h1>
<section id="seleccionar-producto">
<h2>Elige tus productos</h2>
b. <section id="seleccionar-comprar">
<h2>Ir a pagar</h2>
<p>Tu compra tiene <span>3</span> productos</p>
c. Todas las respuestas
d. Ninguna de las respuestas
e. Esto planteado NO sucede nunca en HTML

### La respuesta correcta es la: a

Ya que una etiqueta estática en HTML es aquella cuyo contenido no cambia a menos que el desarrollador modifique el código manualmente.

2. ¿Qué debemos recordar cuando creamos un botón en HTML para asociarlo en JS a la hora de utilizar este botón?
   a. La línea de código donde esta creado el botón en HTML
   b. Todas las respuestas
   c. El id que ponemos en HTML, para luego en Js utilizar el mismo nombre
   d. Ninguna de las respuestas
   e. No hay nada que recordar, solo hay que empezar a trabajar con JS y listo

### La respuesta correcta es la: c

Cuando trabajamos con JavaScript, lo más importante es que el botón tenga un id o class para poder seleccionarlo fácilmente con document.getElementById() o querySelector().

3. ¿Dónde debemos ubicar el script que referencia el archivo Js?
   a. Va al comienzo del body
   b. Se abre una etiqueta script y se pone todo allí
   c. NO hace falta poner un script para tal archivo
   d. Todas las respuestas
   e. La respuesta No esta en las opciones: Si es así escribe tu respuesta...

### La respuesta correcta es la: e

Lo ideal es poner la etiqueta <script src="archivo.js"> justo antes de cerrar el </body>, para asegurarnos de que todo el HTML se haya cargado antes de ejecutar el JS.
Alternativamente, si se pone en el <head>, se debe usar el atributo defer para que no bloquee la carga del HTML.
