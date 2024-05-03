"use client";
import React, { useEffect, useState } from "react";
import { ProductDetail } from '../../../components/ProductDetail/ProductDetail';

interface IProductData {
    id: number;
    name: string;
    price: string
    description: string;
    image: string;
}

export const fetchProductDetail = async (id: number) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            cache: "no-cache",
        });
        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }
        return response.json() as Promise<IProductData>;
    } catch (error) {
        console.error(error);
        throw error; // Re-lanzar el error para que el componente pueda manejarlo
    }
}


export const Product = ({ params }: { params: { id: number } }) => {
    const [product, setProduct] = useState<IProductData | null>(null);
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await fetchProductDetail(params.id);
                setProduct(productData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProduct();
    }, [params.id]);

    if (!product) {
        return <div>Loading...</div>;
    }

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
