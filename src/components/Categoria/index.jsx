
import { useContext } from "react";
import styles from "../Categoria/Categoria.module.css";
import { GlobalContext } from "../../context/GlobalContext";
import Card from "../Card";
import hexToRgba from 'hex-to-rgba'




const Categoria = ({ children, nombre, color }) => {


  const { filtrarVideosPorCategoria } = useContext(GlobalContext);


  //Asignamos los videos a la categoria correspondiente
  const videosFiltrados = filtrarVideosPorCategoria(nombre);


  const obj = {
    backgroundColor: hexToRgba(color, 0.78),
    boxShadow: `0 0 15px ${color}, 0 0 5px ${color}, 0 0 15px ${color}, 0 0 5px ${color}`
  }


  return (
    <section className={styles.categoria_container}
            style={obj}>

      <h1 style={{backgroundColor: `${color}`}}>{children}</h1>

      <div className={styles.videos_container}>
        {videosFiltrados.map((video, index) => {
          return <Card color={color} key={index} {...video}/>;
        })}
      </div>

    </section>

  );
};



export default Categoria;
