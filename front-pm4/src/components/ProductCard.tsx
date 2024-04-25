interface IProductProps {
    id?: number;
    name: string;
    description?: string;
    price: number;
    stock?: number;
    image: string;
    categoryId?: number;
}


export const ProductCard: React.FC<IProductProps> = ({ name, price, image}) => {
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <img src={image}/>
            <span>{name}</span>
            <span>{price}</span>
        </div>
    );
}

export default ProductCard;