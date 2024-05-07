'use client'
import { getOrders } from "@/helpers/orders.helpers";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react"

type Token = { token: string };

export const Orders = () => {

    const [token, setToken] = useState<Token>();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (typeof window !== "undefined" && window.localStorage) {
        const userToken = localStorage.getItem('userSession');
        setToken(JSON.parse(userToken!))
        !userToken && redirect("/login")
      } 
    }, [])

    useEffect(() => {
      setLoading(true)
      async function getData() {
        try {
          const response = await getOrders(token?.token!)
          setLoading(false)
          setOrders(response)
        } catch (error:any) {
          throw new Error(error)
        }
      }
      token && getData()
    }, [token])
     

    return (
        <>
          {!loading ? (
            <div className="relative overflow-x-auto">
              {orders.length > 0 ? (
                <table className="w-full text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400">
                  <thead className="text-sm text-gray-950  bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 rounded-s-lg">Numero de pedido</th>
                      <th scope="col" className="px-6 py-3 rounded-e-lg">Producto</th>
                      <th scope="col" className="px-6 py-3">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order: any) => (
                      <tr className="bg-white dark:bg-gray-800" key={order.id}>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{order.id}</td>
                        <td className="px-6 py-4">
                          {order.products.map((product: any) => (
                            <div key={product.productId}>{product.name}</div>
                          ))}
                        </td>
                        <td className="px-6 py-4">
                          {order.products.map((product: any) => (
                            <div key={product.productId}>{product.price}</div>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h1>Aun no tienes ninguna compra</h1>
              )}
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </>
      );
      
}

export default Orders;