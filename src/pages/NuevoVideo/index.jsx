
import styles from '../NuevoVideo/NuevoVideo.module.css'
import { CustomForm, CustomTextField, CustomNativeSelect } from '../../components/Modal';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '../../components/Button';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { v4 as uuid } from 'uuid'



const NuevoVideo = () => {


    const { errors, handleBlur, AgregarTarjeta, Limpiar, validarEspacios } = useContext(GlobalContext);


    const handleSubmit = async (e) => {

        e.preventDefault();

        const hayErrores = Object.values(errors).some(error => error.error);

        if (hayErrores) {
            alert('Por favor, corrige los errores antes de enviar el formulario.');
            return;
        }

        const card = {
            id: uuid(),
            titulo: document.getElementById('titulo').value,
            categoria: document.getElementById('categoria').value,
            imagen: document.getElementById('imagen').value,
            enlaceVideo: document.getElementById('video').value,
            descripcion: document.getElementById('descripcion').value
        };

        await AgregarTarjeta(card);     
    };
   

    

    return (
        
        <section className={styles.container}>

            <h1>Agregar nuevo video</h1>
            <p>Completa el siguiente formulario para agregar una nueva tarjeta de video!</p>

            <CustomForm onSubmit={handleSubmit} className={styles.formulario} autoComplete='off'>

            <CustomTextField required type="text" id='titulo' label="Titulo" variant="filled" error={errors.nombre.error}
                             helperText={errors.nombre.message ? errors.nombre.message : ''}
                             onBlur={(e) => handleBlur('nombre', validarEspacios(e.target.value))}
                             slotProps={{ formHelperText: { className: 'custom-helper-text'}}}/>

                <FormControl required className="select-form">
                   <InputLabel className="form-label" variant="standard">Categoría</InputLabel>
                    <CustomNativeSelect id='categoria'>
                        <option value='FRONT END'>Front end</option>
                        <option value='BACK END'>Back end</option>
                        <option value='INNOVACIÓN Y GESTIÓN'>Innovación y Gestión</option>
                    </CustomNativeSelect>
                </FormControl>

                <CustomTextField required error={errors.imagen.error} id='imagen' helperText={errors.imagen.message ? errors.imagen.message : ''} 
                                          onBlur={(e) => handleBlur('imagen', e.target.value)} 
                                          type="url" label="Imagen" variant="filled" 
                                          slotProps={{ formHelperText: { className: 'custom-helper-text'}}}/>

                <CustomTextField required error={errors.video.error} id='video' helperText={errors.video.message ? errors.video.message : ''} 
                                          onBlur={(e) => handleBlur('video', e.target.value)} 
                                          type="url" label="Video" variant="filled" 
                                          slotProps={{ formHelperText: { className: 'custom-helper-text'}}}/>

                <CustomTextField required label="Descripcion" id='descripcion' multiline minRows={6} maxRows={8} variant="filled" type='text'
                                         error={errors.descripcion.error} helperText={errors.descripcion.message ? errors.descripcion.message : ''} 
                                         onBlur={(e) => handleBlur('descripcion', validarEspacios(e.target.value))} slotProps={{ formHelperText: { className: 'custom-helper-text'}}}/>

                <div className="buttons-container">
                            <Button type='submit' color='var(--red-color)' borde='2px solid red' boxShadow={true}>Guardar</Button>
                            <Button type='button' onClick={Limpiar}>Limpiar</Button>
                </div>

            </CustomForm>

        </section>
    );
};


export default NuevoVideo;