import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'

export const Footer = () => {

    const date = new Date().getFullYear()
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.divFooter}>
                <Image
                    src='/logoOscuro.png'
                    alt='Logo oscuro para el footer'
                    width={150}
                    height={80}></Image>
                <span className={styles.secondaryText}>{`@${date} All Rights Reserved.`}</span>
            </div>
            <div className={styles.divFooter}>
                <h1 className={styles.tituloFooter}>CONTACT</h1>
                <span className={styles.secondaryText}>Calle cualquiera 123, BsAs, ARG</span>
                <span className={styles.secondaryText}>Email: contacto@mail.com</span>
                <span className={styles.secondaryText} >Phone: 123-456-789</span>
            </div>
            <div className={styles.divFooter}>
                <h1 className={styles.tituloFooter}>SOCIAL MEDIA</h1>
                <Link href='' className={styles.linkRedes}>Facebook</Link>
                <Link href='' className={styles.linkRedes}>Twitter</Link>
                <Link href='' className={styles.linkRedes}>Instagram</Link>
            </div>
            <div className={styles.divFooter}>
                <h1 className={styles.tituloFooter}>NEWSLETTER</h1>
                <span className={styles.secondaryText}>Subscribe now to get daily updates</span>
                <form style={{display:'flex', flexDirection:'column'}}>
                    <input type='string' placeholder='Your email address'></input>
                    <button>SUBSCRIBE</button>
                </form>
            </div>
        </footer>
    )
}