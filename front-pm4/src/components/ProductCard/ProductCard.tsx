// styles 
import styles from './ProductCard.module.css'

import Image from 'next/image';

interface IProductProps {
    id?: number;
    name: string;
    description?: string;
    price: number;
    stock?: number;
    image?: any;
    categoryId?: number;
}


export const ProductCard: React.FC<IProductProps> = ({ name, price, image}) => {
    return (
        <div className={styles.containerCard}>
            <div className={styles.containerImage}>
            <Image 
            src={image}
            width={80}
            height={80}
            alt='Descripcion del producto'
            className={styles.imageProduct}></Image>
            </div>
            <span>{name}</span>
            <span>{price}USD</span>
        </div>
    );
}

export default ProductCard;