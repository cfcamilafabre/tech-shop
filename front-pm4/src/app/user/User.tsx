// styles
import styles from './User.module.css'

//components
import Navbar from '@/components/Navbar/Navbar';

export const User = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className={styles.sectionTitle}>Acceso del cliente</h1>
            <section className={styles.sectionUser} >
                <div className={styles.divisionSection}>
                    <h1 className={styles.titleLogin}>Clientes registrados</h1>
                    <span className={styles.secondaryText}>Si tiene una cuenta, inicie sesión con su dirección de correo electrónico.</span>
                    <form className={styles.formLogin}>
                        <div className={styles.formLogin}>
                        <label>Correo electrónico</label>
                        <input type='string'></input>
                        </div>
                        <div className={styles.formLogin}>
                        <label>Contraseña</label>
                        <input type="password"></input>
                        </div>
                        <button>Inicia sesion</button>
                    </form>
                </div>
                <div className={styles.divisionSection}>
                    <h1 className={styles.titleLogin}>Nuevos clientes</h1>
                    <span>¿Primera vez? Registrate en pocos segundos y sigue con tu compra. Podés acceder a beneficios exclusivos</span>
                    <button>Crear una cuenta</button>
                </div>
            </section>
        </div>
    )
}

export default User;