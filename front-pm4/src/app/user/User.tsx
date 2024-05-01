"use client";

//hooks
import { useState, useEffect } from 'react';
// styles
import styles from './User.module.css'
//components
import { validate } from '@/helpers/validate';
import Link from 'next/link';


export const User = () => {

    //iniciamos un estado para los inputs
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState ({
        email:'El email es requerido',
        password:'La contraseña es requerida'
    })

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    //maneja el envio del form
    const handleSubmit = (event:any) => {
        event.preventDefault();
        if (errors.email || errors.password) {
            return alert ("Error en el login. Datos incorrectos")
        }
    }

    //maneja los cambios en el input ao vivo
    const handleChange = (event:any) => {
        const {name, value} = event.target;

        setForm ({
            ...form, [name]: value
        })

        //modificamos el estado con los valores actuales
        setUserData({
            ...userData,
            [name]: value 
        })
        
    }

    useEffect(() => {
        setErrors(validate(form, errors));
    }, [form])

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
                            <input type='text' name='email' value={userData.email} placeholder='example@mail.com' onChange={handleChange}></input>
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className={styles.formLogin}>
                            <label>Contraseña</label>
                            <input type="password" name='password' value={userData.password} placeholder='*********' onChange={handleChange} ></input>
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                        <button className='buttonDesign disabled:bg-gray-400 disabled:hover:text-white disabled:hover:cursor-default' type="submit" disabled={!userData.email || !userData.password} >Inicia sesion</button>
                    </form>
                </div>
                <div className={styles.divisionSection}>
                    <h1 className={styles.titleLogin}>Nuevos clientes</h1>
                    <span>¿Primera vez? Registrate en pocos segundos y sigue con tu compra. Podés acceder a beneficios exclusivos</span>
                    <Link href="/register"><button className='buttonDesign' style={{ width: '16em' }}>Crear una cuenta</button></Link>
                </div>
            </section>
        </div>
    )
}

export default User;