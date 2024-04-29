// components
import Image from "next/image";

// styles
import styles from './Product.module.css'

export const Product = () => {
    return (
        <>
            <section className={styles.sectionProduct}>
                <div>
                    <Image 
                    src='/iphone.jpg'
                    height={480}
                    width={480}
                    alt="foto producto"
                    className={styles.productPhoto}
                    />
                </div>
                <div className={styles.infoProduct}>
                    <div>
                    <h1 className={styles.nameProduct}>Iphone 15 PRO</h1>
                    <h2 className={styles.priceProduct}>$600usd</h2>
                    <p className={styles.secondaryText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error officiis tempora itaque autem a cum voluptate quasi nostrum ducimus repellendus, molestias, assumenda expedita nihil accusamus, est incidunt similique pariatur optio?</p>
                    <span className={styles.secondaryText}>Descuento pagando con transferencia bancaria o efectivo</span>
                    </div>
                    <div>
                        <form className={styles.formProduct}>
                            <label>Cantidad</label>
                            <input type="number"></input>
                            <button className="buttonDesign">Agregar al carrito</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product;