'use client'
import { getOrderById } from "@/helpers/getOrders";
import { useEffect, useState } from "react"

interface IOrderProps {
    userId: any
}

export const Orders: React.FC<IOrderProps> = ({ userId }) => {
    console.log(userId)

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const orders = await getOrderById(1)
            setLoading(false)
            setOrders(orders)
            console.log(orders)
        }

        // if (userId) {
        // fetchData()
        // }

        fetchData()

    }, [])


    return (
        <>
          {!loading ? (
            <div className="relative overflow-x-auto">
              {orders.length > 0 ? (
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 rounded-s-lg">Numero de pedido</th>
                      <th scope="col" className="px-6 py-3 rounded-e-lg">Producto</th>
                      <th scope="col" className="px-6 py-3">Cantidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order: any) => (
                      <tr className="bg-white dark:bg-gray-800" key={order.id}>
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{order.id}</td>
                        <td className="px-6 py-4">
                          {order.products.map((product: any) => (
                            <div key={product.productId}>{product.productId}</div>
                          ))}
                        </td>
                        <td className="px-6 py-4">
                          {order.products.map((product: any) => (
                            <div key={product.productId}>{product.quantity}</div>
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