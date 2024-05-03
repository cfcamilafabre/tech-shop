// components
import Link from 'next/link'
import { ProductCard } from '../ProductCard/ProductCard'
const apiUrl = process.env.NEXT_PUBLIC_API_URL

        async function getData() {
        const res = await fetch(`${apiUrl}/products`)
    
        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data')
        }
       
        return res.json()
      }
       
      export default async function ContainerProducts() {
        const data = await getData()
       
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[6em] flex-wrap m-8 p-8 justify-items-center" >
                {data.map((card:any) => {
                    return (
                        <Link href={`/product/${card.id}`} key={card.name}>
                        <ProductCard
                        key={card.id}
                        image={card.image}
                        name={card.name}
                        price={card.price}
                        />
                        </Link>
                    )
                })}
            </div>
        )
    }
