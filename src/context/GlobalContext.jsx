
import { createContext } from "react";
import { useState, useEffect } from "react";
import { agregarVideo, editarVideo, eliminarVideo } from "../api";



//Contexto global para toda la aplicacion
export const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {


  //Estado para el menu en dispositivos pequeños
  const [ menu, setMenu ] = useState(false);


  const toggleMenu = () => {
    setMenu(!menu);
  }


  //Definición de las categorías
  const [ categorias, setCategorias ] = useState([
    {  nombre: "FRONT END", color: "#80234f" },
    {  nombre: "BACK END", color: "#1f6fa5" },
    {  nombre: "INNOVACIÓN Y GESTIÓN", color: "#461fa5" },
  ]);


  //Definición de los videos
  const [ videos, setVideos ] = useState([]);


  //Conexion a la API
  useEffect(() => {

    const fetchVideos = async () => {

      try {
        
        const response = await fetch('http://localhost:3001/videos');
        const data = await response.json();

        setVideos(data);
        
      } catch (error) {
        alert('Ocurrio un error al conectarse al servidor', error)
      }
    };

    fetchVideos();

  }, []); 


 const [ currentIndex, setCurrentIndex ] = useState(0); // Controla el índice del video actual.
 const [ currentVideo, setCurrentVideo ] = useState(null); // Video actual
 const [ isAutoChanging, setIsAutoChanging ] = useState(true); // Controla el cambio automático

 

  // Manejar el intervalo para cambiar videos
   useEffect(() => {

    if (!isAutoChanging || !videos || videos.length === 0) return;

    // Si solo hay un video, no es necesario cambiar el índice
    if (videos.length === 1) {
      setCurrentIndex(0); // Asegurarse de que el índice apunte al único video
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * videos.length);
        } while (newIndex === prevIndex); // Evitar repetición consecutiva
        return newIndex;
      });
    }, 5000);

    // Limpiar el intervalo al desmontar o desactivar el cambio automático
    return () => clearInterval(interval);
    
  }, [isAutoChanging, videos]);

                
  // Actualizar el video actual cuando cambia el índice
  useEffect(() => {
    if (videos && videos.length > 0) {
      const validIndex = Math.min(currentIndex, videos.length - 1); // Asegurar índice válido
      setCurrentIndex(validIndex); // Ajustar índice si es necesario                              
      setCurrentVideo(videos[validIndex]);
    } else {
      setCurrentVideo(null);
    }
  }, [currentIndex, videos]); 


  // Manejar el tamaño de pantalla y pausar el cambio automático
  useEffect(() => {
    
    const handleResize = () => {

      const width = window.innerWidth;

      if (width > 843) {

        setIsAutoChanging(true); //Habilitar cambio automático        
        setMenu(false); //Ocultar menu

          // Restaurar el video solo si el actual es null
          if (!currentVideo && videos && videos.length > 0) {
          const validIndex = Math.min(currentIndex, videos.length - 1); // Asegurar índice válido
          setCurrentIndex(validIndex);
          setCurrentVideo(videos[validIndex]);
        }
      } else {
        setIsAutoChanging(false); //Detener cambio automático           
        setCurrentVideo(null); // Limpiar el video actual
      }
    };

    // Escuchar el evento de redimensionamiento
    window.addEventListener("resize", handleResize);

    // Ejecutar al montar para establecer el estado inicial
    handleResize();

    // Limpiar el listener al desmontar
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [videos, currentIndex, currentVideo]); 


  // Obtener el color de la categoria desde el video
  const cambiarColorCategoria = (nombreCategoria) => {

    //Encontrar la categoria que buscamos
    const colorCategoria = 
    categorias.find(categoria => categoria.nombre === nombreCategoria)

    //devolver el color de la categoria
    return colorCategoria ? colorCategoria.color : 'transparent'; 
  }


 //Funcion para agregar una nueva tarjeta/video
 const AgregarTarjeta = async (card) => {

    try {
      
      const confirm = await agregarVideo(card);

      if (confirm) {
        alert('La tarjeta fue agregada exitosamente!');  
        setVideos((prevVideos) => [...prevVideos, card]);
        Limpiar();
      }

    } catch (error) {
        alert('Ocurrio un error al intentar agregar la tarjeta', error);  
    }
 };


  //Funcion para editar una tarjeta/video
 const EditarTarjeta = async (card) => {

    try {
      
        const confirm = await editarVideo(card);

        if (confirm) {

          alert('La tarjeta fue editada exitosamente!');  

          setVideos((prevVideos) =>
            prevVideos.map((video) =>
                video.id === card.id ? { ...video, ...card } : video
          ));
      }

    } catch (error) {
      alert('Ocurrio un error al intentar editar la tarjeta', error); 
    }
 }


 //Funcion para elimiar una tarjeta
 const EliminarTarjeta = async (id) => {

  try {
    
    const confirmar = confirm('Seguro que deseas eliminar esta tarjeta?'); 

      if (confirmar) {

        const success = await eliminarVideo(id);

        if (success) {          
          alert('La tarjeta fue eliminada exitosamente!');
          setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
        }       
      }

  } catch (error) {
      alert('Ocurrio un error al intentar eliminar la tarjeta', error); 
  }
 }


 //Reiniciar los valores del infoCard para restaurar el formulario del modal
 const handleReset = () => {
    setInfoCard({
      titulo: '',
      categoria: 'Front end',
      imagen: '',
      enlaceVideo: '',
      descripcion: '',
    });
 };


 //Limpiar campos del formulario de agregar video
 const Limpiar = () => {
  document.getElementById('titulo').value = '';
  document.getElementById('categoria').value = 'FRONT END';
  document.getElementById('imagen').value = '';
  document.getElementById('video').value = '';
  document.getElementById('descripcion').value = '';
 }


  //Obtener las categorías que tengan videos asociados
  const obtenerCategoriasConVideos = () => {
    return categorias.filter((categoria) =>
      videos.some(
        (video) =>
          video.categoria.toUpperCase() === categoria.nombre
      )
    );
  };


  //Filtrar videos por categoría
  const filtrarVideosPorCategoria = (nombreCategoria) => {
    return videos.filter(
      (video) => video.categoria.toUpperCase() === nombreCategoria
    );
  };


  //Estados para manipular la visibilidad del modal
  const [isModalOpen, setModalOpen] = useState(false);

  const [infoCard, setInfoCard] = useState({});

  //Funciones para abrir/cerrar el modal
  const openModal = (props) => {
   
    //Destructuramos las propiedades de `props`
    const { id, titulo, categoria, imagen, enlaceVideo, descripcion } = props;

    //Actualizamos el estado actual del objeto "infoCard"
    setInfoCard({ id, titulo, categoria, imagen, enlaceVideo, descripcion });

    setModalOpen(true);
  };


  const closeModal = () => {

    setModalOpen(false);

    //Reiniciamos los mensajes de error
    reiniciarErrores();
  };
  

  //Funcion para reinicar el estado de los errores
  const reiniciarErrores = () => {
    setErrors({
      nombre: { error: false, message: '' },
      imagen: { error: false, message: '' },
      video: { error: false, message: '' },
      descripcion: {error: false, message: ''}
    });
  }


  //Estados para el manejor de errores de los campos nombre, imagen y video
  const [errors, setErrors] = useState({
    nombre: { error: false, message: ''},
    imagen: { error: false, message: ''},
    video: { error: false, message: ''},
    descripcion: {error: false, message: ''}
  });
  
  
  const validarEspacios = (texto) => {
    return texto.replaceAll(" ", "");
  }


  const validarNombre = ( nombre ) => {
  
    //Verifica que el nombre tiene minimo 3 caracteres
    if (nombre.length >= 3) {
        return { error: false, message: '' }
    } else {
        return { error: true, message: 'Deben ser al menos 3 caracteres' }
    }
  }


  const validarImg = (imagen) => {

    const extensionesValidas = ['.jpg', '.jpeg', '.png', '.gif', '.webp', 'img', 'images', 'imagen', 'image', 'photo'];

    //Verifica si la URL incluye alguna de las opciones
    const esValida = extensionesValidas.some(extension => imagen.toLowerCase().includes(extension));

    //Verifica que la URL empiece con http y se cumpla con la condicion "esValida"
    if (imagen.startsWith('http') && esValida) {
      return { error: false, message: '' };
    } else {
      return { error: true, message: 'Debe ser una URL válida de imagen' };
    }
  };


  //Verifica que la URL empiece con http y se incluya "youtube.com"
  const validarVideo = (video) => {
    if (video.startsWith('http') && video.includes('youtube.com')) {
      return { error: false, message: '' };
    } else {
      return { error: true, message: 'Debe ser una URL válida de YouTube' };
    }
  };
  


  const validarDescripcion = ( texto ) => {
  
    //Verifica que la descripcion tiene minimo 10 caracteres
    if (texto.length >= 10) {
        return { error: false, message: '' }
    } else {
        return { error: true, message: 'Deben ser al menos 10 caracteres' }
    }
  }



  //funcion para manejar en donde se produce la validacion
  const handleBlur = (campo, valor) => {

    let validacion;
  
    if (campo === 'nombre') {
      validacion = validarNombre(valor);
    } else if (campo === 'imagen') {
      validacion = validarImg(valor);
    } else if (campo === 'video') {
      validacion = validarVideo(valor);
    } else if (campo === 'descripcion'){
      validacion = validarDescripcion(valor);
    }


    //Actualiza solo el estado del campo correspondiente
    setErrors((prev) => ({
      ...prev,
      [campo]: validacion,
    }));
  };


  return (
    <GlobalContext.Provider value={{ categorias, videos, 
                    obtenerCategoriasConVideos, filtrarVideosPorCategoria,
                    openModal, closeModal, isModalOpen, validarEspacios, errors, setErrors,
                    reiniciarErrores, validarNombre, validarImg, validarVideo, handleBlur, 
                    infoCard, setInfoCard, AgregarTarjeta, EditarTarjeta,
                    EliminarTarjeta, handleReset, Limpiar, toggleMenu, 
                    menu, currentVideo, cambiarColorCategoria}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
