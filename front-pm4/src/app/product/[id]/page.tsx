import { ProductDetail } from '../../../components/ProductDetail/ProductDetail';
import { getProductById } from '../../../helpers/getProductById'

export const Product = async ({ params }: { params: { productId: string } }) => {

    if (!params.productId) {
        return <div>Loading...</div>;
    }
    const product = await getProductById(params.productId);

    return (
        <ProductDetail
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
        />
    );
}

export default Product;
