import styles from ("../front/NavBar.module.css")

const NavBar = () => {


    return (
        <>
        <nav className={styles.nav}>
            <div>
            <ul>
                <li><Link>HOME</Link></li>
                <li><Link>SHOP</Link></li>
                <li><Link>ABOUT</Link></li>
                <li><Link>CONTACT US</Link></li>
            </ul>
            </div>
            <div>
                <Link>shop</Link>
                <Link>account</Link>
            </div>
        </nav>
        </>
    )
}

export default NavBar;