'use client'
import Image from "next/image";
import Link from "next/link";

//styles 
import styles from './Navbar.module.css'
import { useEffect, useState } from "react";
import { IUserSession } from "@/app/interfaces/IUserSession";
import { usePathname, useRouter } from "next/navigation";

interface INavProps {
    backgroundColor?: string;
    textColor?: string;
}

export const Navbar: React.FC<INavProps> = ({ backgroundColor, textColor }) => {

    const pathname = usePathname();
    const router = useRouter();

    const [userSession, setUserSession] = useState<IUserSession>();
    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem('userSession');
            setUserSession(JSON.parse(userToken!));
        }
    }, [pathname])

    const handleLogOut = () => {
        localStorage.removeItem('userSession')
        router.push("/login")
    }

    const handleOpenMenu = () => {
        const menu = document.getElementById("mobile-menu")
        menu?.classList.toggle("hidden")

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

        <header className={`${styles.navBar} flex flex-row h-12 md:h-auto justify-between`} style={{ backgroundColor: backgroundColor, color: textColor, }}>
            <button type="button" onClick={handleOpenMenu} className="block md:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg></button>
            <form className="flex gap-4 w-28 md:w-52">
                <input type="string" placeholder="Buscar"></input>
                <button style={{ border: "none", backgroundColor: "transparent", cursor: "pointer" }}><Image
                    src='/lupa.png'
                    alt="lupa"
                    width={18}
                    height={18} /></button>
            </form>

            <div id="mobile-menu" className="absolute hidden left-0 top-[10.6rem] bg-[#e3e3e3] p-4 w-52 ">
                <ul className="flex flex-col gap-2 mb-4 ">
                    <li><Link className={styles.link} href="/home">PRODUCTOS</Link></li>
                    <li><Link className={styles.link} href="">SOBRE NOSOTROS</Link></li>
                    <li><Link className={styles.link} href="">CONTACTO</Link></li>
                </ul>
                {userSession ?
                    <>
                        <div className={`flex flex-row gap-4 mb-4`}>
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
                        </div>
                        <button type="button" className="buttonDesign" onClick={handleLogOut}>Cerrar sesión</button>
                    </>
                    : <div className="flex">
                        <Link className="buttonDesign" href="/login">Ingresá</Link>
                    </div>}
            </div>

            <div className="hidden md:flex">
                <ul className="flex flex-row gap-20">
                    <li><Link className={styles.link} href="/home">PRODUCTOS</Link></li>
                    <li><Link className={styles.link} href="">SOBRE NOSOTROS</Link></li>
                    <li><Link className={styles.link} href="">CONTACTO</Link></li>
                </ul>
            </div>
            {userSession ?
                <div className={`${styles.endNavBar} hidden md:flex`}>
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
                : <div className="hidden md:flex">
                    <Link className="buttonDesign" href="/login">Ingresá</Link>
                </div>}
        </header>
    </>
    )
}

export default Navbar;