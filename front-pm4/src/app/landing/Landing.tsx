import Image from "next/image";
import styles from "./Landing.module.css"

//react
import Link from "next/link";

export const Landing = () => {
    return (
        <>
            <div className={styles.landingContainer}>
                <div className={styles.textosLanding}>
                    <h1 className={styles.h1Landing}>Iphone 15 PRO</h1>
                    <h3>Nueva cámara. Nuevo diseño. Nuevocionante.</h3>
                    <Link className="buttonDesign" href="/home">Ir a la tienda</Link>
                </div>
                <Image
                    src='/landing-page.jpg'
                    width={400}
                    height={347}
                    alt="landing-photo"
                    className={styles.imgLanding}
                />
            </div>
        </>
    )
}

export default Landing;