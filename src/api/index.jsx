

const agregarVideo = async ( card ) => {

    try {
      
        const conexion = await fetch('http://localhost:3001/videos', {

            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                id: card.id,
                titulo: card.titulo,
                categoria: card.categoria,
                imagen: card.imagen,
                enlaceVideo: card.enlaceVideo,
                descripcion: card.descripcion
            })
        });
        
        if (!conexion.ok) {
          alert('Ocurrio un error al intentar agregar la tarjeta', error);  
        }

        const res = await conexion.json();

        return res;

    } catch (error) {
        alert('Ocurrio un error al intentar agregar la tarjeta', error);
    }
};


const editarVideo = async (card) => {

    try {
       
        const conexion = await fetch(`http://localhost:3001/videos/${card.id}`, {
            method: 'PUT',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                titulo: card.titulo,
                categoria: card.categoria,
                imagen: card.imagen,
                enlaceVideo: card.enlaceVideo,
                descripcion: card.descripcion
            })
        });

        if (!conexion.ok) {
            alert('Ocurrio un error al intentar editar la tarjeta', error);  
        }

        const res = await conexion.json();

        return res;

    } catch (error) {
        alert('Ocurrio un error al intentar editar la tarjeta', error);
    } 
};


const eliminarVideo = async (id) => {

    try {
       
        const conexion = await fetch(`http://localhost:3001/videos/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type":"application/json"
            }
        });

        if (!conexion.ok) {
            alert('Ocurrio un error al intentar eliminar la tarjeta', error);  
        }

        const res = await conexion.json();

        return res;

    } catch (error) {
        alert('Ocurrio un error al intentar eliminar la tarjeta', error);
    } 
};



export { agregarVideo, editarVideo, eliminarVideo }