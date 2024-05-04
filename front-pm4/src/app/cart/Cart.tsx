'use client'
//styles
import Link from 'next/link';
import styles from './Cart.module.css';
//hooks
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';

export const Cart = () => {

    const [token, setToken] = useState()

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem('userSession');
            setToken(JSON.parse(userToken!))
            !userToken && redirect('/user')
        }
    }, [])


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

export default Cart;