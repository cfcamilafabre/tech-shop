import React from "react";

//components
import { ProductDetail } from '../../../components/ProductDetail/ProductDetail'

export const fetchProductDetail = async (id:any) => {
    const response = await fetch (`http://localhost:3000/products/${id}`, {
        cache: "no-cache",
    });
    const product = await response.json();
    return product;
}

export const Product =  async ({ params }: { params: { id: string } }) => {
    const { id, name, price, description, image } = await fetchProductDetail(params.id);

    return (
        <ProductDetail id={id} name={name} price={price} description={description} image={image}></ProductDetail>
    )
}

export default Product;