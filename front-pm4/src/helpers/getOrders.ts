export async function getOrderById(id:any) {
    try {
        const res = await fetch(`https://fakestoreapi.com/carts/user/${id}`)
        const orders = await res.json();
        return orders;

    } catch (error:any) {
        throw new Error (error)
    }
}
