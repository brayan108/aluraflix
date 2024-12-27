# Aluraflix


## Descripción
Este proyecto fue propuesto como un reto por Alura Latam. se trata de una aplicación para agregar, editar, y eliminar videos con las categorias Front-end, Back-end e Innovación y Gestión.


## Instalación
Para instalar y usar este proyecto, puedes seguir estos pasos:

 1. Clona el repositorio:
   ```
   git clone https://github.com/brayan108/aluraflix.git
   ```
2. Abre el proyecto en Visual Studio Code.
3. Abre el terminal en Visual Studio Code y ejecuta el siguiente comando:
   ```
   rm -rf node_modules package-lock.json
   npm install
   ```
4. Posteriormente, ejecuta el siguiente comando para iniciar JSON Server, que simula la base de datos de los videos:
   ```
   npx json-server --watch db.json --port 3001
   ```
5. y ejecuta este comando
   ```
   npm run dev
   ```
   Nota: asegurate de que tienes instalado Node.js para que lo anterior funcione, si no lo tienes, puedes descargarlo aquí https://nodejs.org/en

de esta manera, dará inicio la ejecucion de la aplicación

## Como Usar
Al ejecutar la aplicación, nos muestra cada categoria con sus videos asociados, si no hay ningun video asociado, no aprecera la categoria.

#### Como agregar un video
La interfaz dispone de una cabecera con 2 botones, en este caso presionaremos el botón que dice "Nuevo Video". nos redirigirá a una página que contiene un formulario, 
para agregar un nuevo video, completaremos el formulario con la informacion solicitada. y posteriormente presionaremos el botón de "Guardar". 
de esta manera, se habrá agregado un nuevo video al servidor. para presenciarlo, presionaremos el botón "Home" de la cabecera. 


#### Como editar un video
Cada vez que se cree un video, este se reflejará como una tarjeta o card, esta tarjeta dispone de 2 botones, uno para editar y otro para elimiar, si deseas editar una tarjeta, puedes darle
al botón de editar, esto desplegará un modal con un formulario, que contendrá la información actual de la tarjeta seleccionada, puedes modificar la información que necesites y darle al botón de guardar.
de esta manera, se editará la tarjeta.


#### Como eliminar un video
Para eliminarlo, pudes darle al botón que dice eliminar, aparecerá un cuadro de diálogo que te preguntará si deseas eliminar la tarjeta seleccionada, le das aceptar y posteriormete, la tarjeta se eliminará.
