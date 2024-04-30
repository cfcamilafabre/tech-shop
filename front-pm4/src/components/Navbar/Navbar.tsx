import Image from "next/image";
import Link from "next/link";

//styles 
import styles from './Navbar.module.css'

interface INavProps {
    backgroundColor?: string;
    textColor?: string;
}

export const Navbar: React.FC<INavProps> = ({backgroundColor, textColor}) => {
    return (<>

        <div className={styles.containerLogo}>
            <Image
                src='/tech.png'
                width={200}
                height={100}
                alt="Logo"
            />
        </div>
        <header className={styles.navBar}  style={{backgroundColor:backgroundColor, color:textColor,}}>
          <form style={{display:"flex", gap:".4em"}}>
                <input type="string" placeholder="Buscar"></input>
                <button style={{border:"none", backgroundColor:"transparent", cursor:"pointer"}}><Image
                 src='/lupa.png'
                 alt="lupa"
                 width={18}
                 height={18}/></button>
                </form>
            <div>
                <ul className={styles.ulNavBar}>
                    <li><Link className={styles.link} href="/home">HOME</Link></li>
                    <li><Link className={styles.link} href="/shop">SHOP</Link></li>
                    <li><Link className={styles.link} href="">ABOUT</Link></li>
                    <li><Link className={styles.link} href="">CONTACT US</Link></li>
                </ul>
            </div>
            <div className={styles.endNavBar}>
                <Link className={styles.link} href="/checkout"><Image
                src='/shop.svg'
                width={20}
                height={20}
                alt="checkout carrito"
            /></Link>
                <Link className={styles.link} href="/user">
                    <Image
                src='/person-fill.svg'
                width={20}
                height={20}
                alt="myaccount"
            />
            </Link>
            </div>
        </header>
    </>
    )
}

export default Navbar;