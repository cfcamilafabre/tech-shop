import Image from "next/image";
import Link from "next/link";

//styles 
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (<>

        <div className={styles.containerLogo}>
            <Image
                src='/tech.png'
                width={200}
                height={100}
                alt="Logo"
            />
        </div>
        <header className={styles.navBar}>
            <div>
                <Link className={styles.link} href="">search</Link>
            </div>
            <div>
                <ul className={styles.ulNavBar}>
                    <li><Link className={styles.link} href="/">HOME</Link></li>
                    <li><Link className={styles.link} href="">SHOP</Link></li>
                    <li><Link className={styles.link} href="">ABOUT</Link></li>
                    <li><Link className={styles.link} href="">CONTACT US</Link></li>
                </ul>
            </div>
            <div className={styles.endNavBar}>
                <Link className={styles.link} href="/checkout">carrito</Link>
                <Link className={styles.link} href="">account</Link>
            </div>
        </header>
    </>
    )
}

export default Navbar;