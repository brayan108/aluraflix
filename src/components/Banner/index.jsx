
import styled from "styled-components";
import styles from "../Banner/Banner.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";



const CustomsText = styled.div`

    max-width: 40%;
    max-height: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
    overflow: auto;


    & h1 {
        font-family: var(--Josefin-Sans);
        font-size: 2.2rem;
        color: white;
        align-self: center;
        background-color: ${ props => props.$color ? props.$color : 'transparent' };
        padding: 1rem 1.5rem 0.5rem 1.5rem;
        border-radius: 1rem;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
        animation: subirBajar 2s ease-in-out infinite;
        text-align: center;     
    }

    @keyframes subirBajar {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

    & h2 {
        font-family: var(--Josefin-Sans);
        color: white;
        font-size: 1.75rem;
    }

    & h3 {
        font-family: var(--Josefin-Sans);
        color: white;
        font-size: 1.4rem;
        white-space: pre-wrap;
    }

    &::-webkit-scrollbar {
    width: 8px;
    height: 9px;
}

    &::-webkit-scrollbar-track {
        background: #fff;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--red-color);
        border-radius: 10px;
    }

`;




const Banner = ({ img, color }) => {


  const { currentVideo, cambiarColorCategoria } = useContext(GlobalContext);


  

  const imagenConvertida = (imagen) => {
    // Validar que imagen no sea undefined o null
    if (!imagen) return ""; // Retorna una cadena vacía si no hay imagen
    return imagen.replaceAll(" ", ""); // Reemplaza los espacios
  };



  return (
   
    <div className={styles.banner} style={{ backgroundImage: currentVideo ? `url(/img/banner-${imagenConvertida(currentVideo.categoria)}.jpg)` : `url(/img/banner-${img}.jpg)` }}>

      <div className={styles.gradient} style={{background: color}}/>

      { currentVideo && (
        
        <div className={styles.container}>

          <CustomsText $color={cambiarColorCategoria(currentVideo.categoria)}>
            <h1>{currentVideo.categoria}</h1>
            <h2>{currentVideo.titulo}</h2>
            <h3>{currentVideo.descripcion}</h3>
          </CustomsText>

          <a href={currentVideo.enlaceVideo} target="_blank">
            <img src={currentVideo.imagen} alt="imagen"/>
          </a>
        </div>
      )}

    </div>
  );
};

export default Banner;
