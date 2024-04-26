import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (<>

        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image
                src='/tech.png'
                width={200}
                height={100}
                alt="Logo"
            />
        </div>
        <header style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "30px" }}>
            <div>
                <Link href="">search</Link>
            </div>
            <div>
                <ul style={{ display: "flex", flexDirection: "row", gap: "80px" }}>
                    <li><Link href="">HOME</Link></li>
                    <li><Link href="">SHOP</Link></li>
                    <li><Link href="">ABOUT</Link></li>
                    <li><Link href="">CONTACT US</Link></li>
                </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "18px" }}>
                <Link href="">carrito</Link>
                <Link href="">account</Link>
            </div>
        </header>
    </>
    )
}

export default Navbar;