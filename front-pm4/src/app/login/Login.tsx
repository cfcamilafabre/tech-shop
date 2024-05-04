"use client";

//hooks
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// styles
import styles from './Login.module.css'
//components
import Link from 'next/link';
//interfaces
import { ILoginErrorProps, ILoginProps } from '../interfaces/loginProps'
import { validateLoginForm } from '@/helpers/validateLogin';


export const Login = () => {

    const router = useRouter();

    //iniciamos un estado para los inputs
    const [userData, setUserData] = useState<ILoginProps>({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState<ILoginErrorProps>({
        email: 'El email es requerido',
        password: 'La contraseña es requerida'
    })

    //maneja el envio del form
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (errors.email || errors.password) {
            return alert("Error en el login. Datos incorrectos")
        }
        
        try{
        fetch("http://localhost:3001/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...userData }),
        })
            .then((res) => res.json())
            .then((json) => {
                const { token, user } = json
                localStorage.setItem("userSession", JSON.stringify({token: token, userData: user}));
                alert(`Bienvenid@ ${userData.email}`)
                router.push("/home")
            });
        } catch (error:any) {
            throw new Error(error);
        }
    }

    //maneja los cambios en el input ao vivo
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //modificamos el estado con los valores actuales
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        const errors = validateLoginForm(userData)
        setErrors(errors)

    }, [userData])

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
                            <input type='text' name='email' value={userData.email} placeholder='example@mail.com' onChange={handleChange} required></input>
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                        <div className={styles.formLogin}>
                            <label>Contraseña</label>
                            <input type="password" name='password' value={userData.password} placeholder='*********' onChange={handleChange} required ></input>
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

export default Login;