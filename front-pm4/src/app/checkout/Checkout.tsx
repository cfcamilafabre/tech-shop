//styles
import Link from 'next/link';
import styles from './Checkout.module.css';

export const Checkout = () => {
    return (
        <>
        <section className={styles.sectionCheckout}>
        <h1 className={styles.titlePage}>Mi carrito de compras</h1>
        <div className={styles.item}>
            <span>Nombre del producto</span>
            <span>Precio</span>
            <button className='buttonDesign'>Eliminar</button>
        </div>
        <div className={styles.totalCheckout}>
            <span>Total</span>
            <span>$total</span>
        </div>
        <div className={styles.buttonsContainer}>
        <button className='buttonDesign' style={{width:"30%"}}>Iniciar compra</button>
        <Link href="" style={{color:"black"}}>Seguir comprando</Link>
        </div>
        </section>
        </>
    )
}

export default Checkout;