
import styles from '../NotFound/NotFound.module.css';
import gato from '/img/gato-dudando.gif';



const NotFound = () => {


    return (
        <section className={styles.container}>
            <img src={gato}/>
            <h1>Esta página no existe!</h1>
        </section>
    );
};


export default NotFound;