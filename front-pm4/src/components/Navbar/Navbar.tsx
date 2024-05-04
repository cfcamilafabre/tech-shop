'use client'
import Image from "next/image";
import Link from "next/link";

//styles 
import styles from './Navbar.module.css'
import { useEffect, useState } from "react";
import { IUserSession } from "@/app/interfaces/IUserSession";
import { redirect, useRouter } from "next/navigation";

interface INavProps {
    backgroundColor?: string;
    textColor?: string;
}

export const Navbar: React.FC<INavProps> = ({backgroundColor, textColor}) => {

    const router = useRouter();

    const [userSession, setUserSession] = useState<IUserSession>();
    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem('userSession');
            setUserSession(JSON.parse(userToken!))
        }
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem('userSession')
        router.push("/login")
    }

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
            {userSession?
            <div className={styles.endNavBar}>
            <Link className={styles.link} href="/cart"><Image
            src='/shop.svg'
            width={20}
            height={20}
            alt="cart items"
        /></Link>
            <Link className={styles.link} href="/user">
            <Image
            src='/person-fill.svg'
            width={20}
            height={20}
            alt="myaccount"
        />
        </Link>
        <button type="button" className="buttonDesign" onClick={handleLogOut}>Cerrar sesión</button>
        </div>
        : <div>
        <Link className="buttonDesign" href="/login">Ingresá</Link>
    </div>}
        </header>
    </>
    )
}

export default Navbar;