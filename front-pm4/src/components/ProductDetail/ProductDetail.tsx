"use client";
// components
import Image from "next/image";

// styles
import styles from './ProductDetail.module.css'


interface IProductDetail {
    id?: any,
    image?: any,
    name: string,
    price: number,
    description: string,
    handleBuy: (...args:any []) => any
}

export const ProductDetail: React.FC<IProductDetail> = ({ image, name, price, description, handleBuy}) => {

    return (
            <section className={styles.sectionProduct}>
                <div>
                    <Image 
                    src={image}
                    height={480}
                    width={480}
                    alt="foto producto"
                    className={styles.productPhoto}
                    />
                </div>
                <div className={styles.infoProduct}>
                    <div>
                    <h1 className={styles.nameProduct}>{name}</h1>
                    <h2 className={styles.priceProduct}>{`${price}$USD`}</h2>
                    <p className={styles.secondaryText}>{description}</p>
                    <span className={styles.secondaryText}>Descuento pagando con transferencia bancaria o efectivo</span>
                    </div>
                    <div>
                            <button className="buttonDesign" onClick={handleBuy}>Agregar al carrito</button>
                    </div>
                </div>
            </section>
    )
}

export default ProductDetail;