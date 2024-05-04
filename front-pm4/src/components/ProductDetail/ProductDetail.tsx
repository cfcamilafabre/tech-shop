"use client";
// components
import Image from "next/image";

// styles
import styles from './ProductDetail.module.css'

//image
import image from './../../../public/iphone.jpg'

interface IProductDetail {
    id?: any,
    image?: any,
    name: string,
    price: number,
    description: string,
    onClick: (...args:any []) => any
}

export const ProductDetail: React.FC<IProductDetail> = ({ image, name, price, description, onClick}) => {

    const onClickHandle = () => {
        onClick;
    }


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
                        <form className={styles.formProduct}>
                            <label>Cantidad</label>
                            <input type="number"></input>
                            <button className="buttonDesign" onClick={onClickHandle}>Agregar al carrito</button>
                        </form>
                    </div>
                </div>
            </section>
    )
}

export default ProductDetail;