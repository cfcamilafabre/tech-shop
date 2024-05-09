'use client'
//styles
import Link from 'next/link';
import styles from './Cart.module.css';
//hooks
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { IProduct } from '../interfaces/IProduct';
import { IUserSession } from '../interfaces/IUserSession';
import { createOrder } from '@/helpers/orders.helpers';

export const Cart = () => {

    const [token, setToken] = useState<IUserSession>()
    const [cart, setCart] = useState<IProduct[]>([])
    const [total, setTotal] = useState<number>(0)

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem('userSession');
            setToken(JSON.parse(userToken!))
            !userToken && redirect('/user')
        }

        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (storedCart) {
            let totalCart = 0;
            storedCart?.map((item: IProduct) => {
                totalCart = totalCart + item.price
            })
            setTotal(totalCart)
            setCart(storedCart)
        }
    }, [])

    async function handleCheckout() {
        try {
            const orderProducts = new Set(cart.map((product) => product.id))
            await createOrder(Array.from(orderProducts), token?.token!)
            localStorage.setItem("cart", "[]");
            setCart([]);
            setTotal(0);
            alert("Compra realizada con éxito")
        } catch (error: any) {
            throw new Error(error)
        }
    }

    function handleDeleteItem(id: number) {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const filteredCart = storedCart?.filter((items: IProduct) => items.id !== id)
        localStorage.setItem("cart", JSON.stringify(filteredCart))
        let totalCart = 0;
        filteredCart?.map((items: IProduct) => {
            totalCart = totalCart + items.price;
        });
        setTotal(totalCart);
        setCart(filteredCart);
    }


    return (
        <>
            <section className={styles.sectionCheckout}>
                <h1 className={styles.titlePage}>Mi carrito de compras</h1>

                {
                    cart.length > 0 ? (
                        cart?.map((item) => {
                            return (
                                <div className={styles.item} key={item.id}>
                                    <span>{item.name}</span>
                                    <span>${item.price} USD</span>
                                    <button className='buttonDesign' onClick={() => handleDeleteItem(item.id)} >Eliminar</button>
                                </div>
                            )
                        })
                    ) : (
                        <span>No tienes ningun producto agregado a tu carrito</span>
                    )
                }

                <div className={styles.totalCheckout}>
                    <span>Total:</span>
                    <span>${total}</span>
                </div>
                <div className={styles.buttonsContainer}>
                    <button className='buttonDesign' style={{ width: "30%" }} onClick={handleCheckout}>Iniciar compra</button>
                    <Link href="" style={{ color: "black" }}>Seguir comprando</Link>
                </div>
            </section>
        </>
    )
}

export default Cart;