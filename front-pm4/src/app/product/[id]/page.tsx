'use client'
import { useEffect, useState } from 'react';
import { ProductDetail } from '../../../components/ProductDetail/ProductDetail';
import { getProductById } from '../../../helpers/getProductById'
//interfaces
import { IProduct } from '@/app/interfaces/IProduct';
import { IUserSession } from '@/app/interfaces/IUserSession';
import { useRouter } from 'next/navigation';


export const Product = ({ params }: { params: { id: any } }) => {

    const router = useRouter()
    const [userSession, setUserSession] = useState<IUserSession>();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        const fetchData = async () => {
            const product = await getProductById(params.id)
            setProduct(product)
        }
        fetchData()

        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem('userSession');
            setUserSession(JSON.parse(userToken!))
        }
    }, [])

    const handleBuy = (event:any) => {
        if (!userSession) {
            alert("Debes estar logeado para poder realizar la compra")
            router.push("/login")
        }
    }

    return (
        <>
            {
            product ?
                (<ProductDetail
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        onClick={handleBuy}                   
                        image={product.image}
                />
                )
            :
                <div>Loading...</div>
            }
        </>
    );
}

export default Product;
