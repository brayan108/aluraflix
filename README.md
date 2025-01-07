# Aluraflix


## Descripción
Este proyecto fue propuesto como un reto por Alura Latam. se trata de una aplicación para agregar, editar, y eliminar videos con las categorías Front-end, Back-end e Innovación y Gestión.


## Instalación
Para instalar y usar este proyecto, puedes seguir estos pasos:

 1. Clona el repositorio:
    
   ```
   git clone https://github.com/brayan108/aluraflix.git
   ```
2. Abre el proyecto en Visual Studio Code.
3. Abre el terminal en Visual Studio Code y ejecuta el siguiente comando:
   
   ```
   npm install
   ```
4. Posteriormente, ejecuta el siguiente comando para iniciar JSON Server, que simula la base de datos de los videos:
   
   ```
   npx json-server --watch db.json --port 3001
   ```
5. Y ejecuta este comando
 
   ```
   npm run dev
   ```
6. Copia y pega en tu navegador la URL que te devuelve, normalmente es http://localhost:5173/
   
   Nota: asegurate de que tienes instalado Node.js para que lo anterior funcione, si no lo tienes, puedes descargarlo aquí https://nodejs.org/en

de esta manera, dará inicio la ejecución de la aplicación, despues, si quieres volver a utilizarla, el paso 3 ya no es necesario, solo sigue el paso 4 y 5.

## Como Usar
Al ejecutar la aplicación, nos muestra cada categoría con sus videos asociados con un formato estilo tarjeta, al seleccionar una tarjeta, se abrirá una pestaña hacia el video seleccionado, si no hay ningun video asociado, no aprecerá la categoría.

#### Como agregar un video
La interfaz dispone de una cabecera con 2 botones, en este caso presionaremos el botón que dice "Nuevo Video". nos redirigirá a una página que contiene un formulario, 
para agregar un nuevo video, completaremos el formulario con la información solicitada. y posteriormente presionaremos el botón de "Guardar". 
de esta manera, se habrá agregado un nuevo video al servidor. para presenciarlo, presionaremos el botón "Home" de la cabecera. 


#### Como editar un video
Cada vez que se cree un video, este se reflejará como una tarjeta o card, esta tarjeta dispone de 2 botones, uno para editar y otro para eliminar, si deseas editar una tarjeta, puedes darle
al botón de editar, esto desplegará un modal con un formulario que contendrá la información actual de la tarjeta seleccionada, puedes modificar la información que necesites y darle al botón de guardar.
de esta manera, se editará la tarjeta.


#### Como eliminar un video
Para eliminarlo, pudes darle al botón que dice eliminar, aparecerá un cuadro de diálogo que te preguntará si deseas eliminar la tarjeta seleccionada, le das aceptar y posteriormente, la tarjeta se eliminará.


## Aspectos importantes y consideraciones
 - En el banner de la página Home, si es que hay videos disponibles, aparecerá la imagen de un video junto con su titulo y descripción cada 5 segundos, al hacer click en la imagen, se abrirá una pestaña hacia el video seleccionado.
 - Si la pantalla es menor a 844 pixeles de ancho, no se mostrará ninguna información de videos en el banner, y la imagen de fondo se reemplazará por la imagen por defecto.
 - Los formularios tienen validaciones, si no se cumplen con ellas, no será posible agregar o editar una tarjeta.
 - Si el usuario viaja a una página que no existe, la aplicación mostrará una página para este caso.
 - Si no se hace el paso 4 del proceso de instalación, la aplicación no se podrá conectar al servidor y no funcionará correctamente.
 - En el caso que no haya ningun video, ya sea porque no hay ninguno disponible o no se haya establecido la conexion al servidor, en el banner se mostrará una imagen por defecto, y en la sección de categorías,
   se le informará al usuario que no hay contenido disponible.


## Agradecimientos especiales
Quiero agradecer a mis instructores por todo el conocimiento y apoyo brindado durante este curso. Gracias a ustedes, he podido poner en práctica todo lo aprendido. Ha sido una experiencia enriquecedora y me siento más preparado para enfrentar nuevos desafíos.
Muchas gracias y bendiciones.
