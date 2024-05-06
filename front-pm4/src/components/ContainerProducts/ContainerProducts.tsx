"use client"
// components
import Link from 'next/link'
import { ProductCard } from '../ProductCard/ProductCard'
import { useEffect, useState } from 'react'
import { IUserSession } from '@/app/interfaces/IUserSession'
import { getProducts } from '@/helpers/getProductById';
     
export default function ContainerProducts() {

    const [userSession, setUserSession] = useState<IUserSession>();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const products = await getProducts()
            setLoading(false)
            setProducts(products)
        }
        fetchData()

        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem('userSession');
            setUserSession(JSON.parse(userToken!))
        }
    }, [])
       
        return (
            <>
            {
            !loading ? 
            (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6em] flex-wrap m-8 p-8 justify-items-center" >
                {products && products.map((card:any) => {
                    return (
                        <Link href={`/product/${card.id}`} key={card.id}>
                        <ProductCard
                        key={card.id}
                        image={card.image}
                        name={card.name}
                        price={card.price}
                        />
                        </Link>
                    )
                })}
            </div>)
            :
            <div>Loading...</div>
         }
         </>
        )
    }
