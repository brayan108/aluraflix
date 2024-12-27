
import styles from '../Home/Home.module.css';
import Banner from '../../components/Banner';
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react';
import Categoria from '../../components/Categoria';



const Home = () => {


    const { obtenerCategoriasConVideos } = useContext(GlobalContext);
    

    //Cargar las categorias que contengan al menos un video
    const categoriasConVideos = obtenerCategoriasConVideos();
           


    return (
        <>
            <Banner img='default' color='black'/>

            { categoriasConVideos.length > 0 ? 
            
                categoriasConVideos.map((categoria, index) => {
                return <Categoria nombre={categoria.nombre} color={categoria.color} key={index}>
                    {categoria.nombre}
                    </Categoria>
            })
        : <section className={styles.container}>

                <img src="/img/perro-dudando.gif" alt="gif perro" />

                <h1>
                    No hay información para mostrar!
                </h1>
                
            </section>
        }                    
        </>
    );
};



export default Home;