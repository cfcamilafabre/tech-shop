//styles
import Link from 'next/link';
import styles from './Checkout.module.css';

//components
import Navbar from '@/components/Navbar/Navbar';

export const Checkout = () => {
    return (
        <>
        <Navbar></Navbar>
        <section className={styles.sectionCheckout}>
        <h1 className={styles.titlePage}>Mi carrito de compras</h1>
        <div className={styles.item}>
            <span>Nombre del producto</span>
            <span>Precio</span>
            <button>Eliminar</button>
        </div>
        <div className={styles.totalCheckout}>
            <span>Total</span>
            <span>$total</span>
        </div>
        <button>Iniciar compra</button>
        <Link href="">Seguir comprando</Link>
        </section>
        </>
    )
}

export default Checkout;