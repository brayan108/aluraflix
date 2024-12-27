
import styles from '../Card/Card.module.css';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";




const Card = ( props ) => {

    
    //Destructuramos las propiedades que usaremos del objeto video
    const { id, imagen, enlaceVideo, color } = props;
    

    //Obtenemos la funcion para abrir el modal
    const { openModal, EliminarTarjeta} = useContext(GlobalContext);


    return (
        <div className={styles.card_container}>

            <header>                
                <a href={enlaceVideo} target='_blank'>
                    <img src={imagen} alt="imagen" />
                </a>
            </header>

            <footer style={{backgroundColor: `${color}`}}>

                <div className={styles.iconContainer}>
                    <button onClick={() => openModal(props)}>
                        <FaEdit className={`${styles.icon}`}/>
                        <p>Editar</p>
                    </button>                  
                </div>
                
                <div className={styles.iconContainer}>
                    <button onClick={() => EliminarTarjeta(id)}>
                        <MdDeleteForever className={`${styles.icon} ${styles.deleteIcon}`} />
                        <p>Eliminar</p>
                    </button>             
                </div>
                
            </footer>

        </div>
    );
};


export default Card;