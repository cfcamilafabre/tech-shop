"use client";

//hooks
import { useState } from 'react';
// styles
import styles from './User.module.css'
//components
import { validate } from '@/helpers/validate';


export const User = () => {

    //iniciamos un estado para los inputs
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState ({
        username:'El usuario es requerido',
        password:'La contraseña es requerida'
    })

    //maneja el envio del form
    const handleSubmit = (event:any) => {
        event.preventDefault();
        if (errors.username || errors.password) {
            return alert ("Error en el login. Datos incorrectos")
        }
    }

    //maneja los cambios en el input ao vivo
    const handleChange = (event:any) => {
        const {name, value} = event.target;

        //modificamos el estado con los valores actuales
        setUserData({
            ...userData,
            [name]: value
        })

        const errors = validate(userData)
    }

    return (
        <div>
            <h1 className={styles.sectionTitle}>Acceso del cliente</h1>
            <section className={styles.sectionUser} >
                <div className={styles.divisionSection}>
                    <h1 className={styles.titleLogin}>Clientes registrados</h1>
                    <span className={styles.secondaryText}>Si tiene una cuenta, inicie sesión con su correo electronico</span>
                    <form onSubmit={handleSubmit} className={styles.formLogin}>
                        <div className={styles.formLogin}>
                            <label>Email</label>
                            <input type='text' name='username' value={userData.username} placeholder='example@mail.com' onChange={handleChange}></input>
                            {errors.username && <span>{errors.username}</span>}
                        </div>
                        <div className={styles.formLogin}>
                            <label>Contraseña</label>
                            <input type="password" name='password' value={userData.password} placeholder='*********' onChange={handleChange}></input>
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <button className='buttonDesign' type="submit" disabled={errors.password || errors.username}>Inicia sesion</button>
                    </form>
                </div>
                <div className={styles.divisionSection}>
                    <h1 className={styles.titleLogin}>Nuevos clientes</h1>
                    <span>¿Primera vez? Registrate en pocos segundos y sigue con tu compra. Podés acceder a beneficios exclusivos</span>
                    <button className='buttonDesign' style={{ width: '16em' }}>Crear una cuenta</button>
                </div>
            </section>
        </div>
    )
}

export default User;