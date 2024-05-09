const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getProductsDB() {
    try {
        const res = await fetch(`${apiUrl}/products`, {
            method: "GET",
            headers: {
                'ngrok-skip-browser-warning': 'true'
            },
            next: {revalidate: 3600}
        })
        const products = await res.json();
        return products;
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getProducts() {
    try {
        const productsDB = await getProductsDB();
        return productsDB;
    } catch (error: any) {
        throw new Error(error)
    }

}

export async function getProductById(id: string) {
    try {
        const products = await getProducts();
        const product = products.find((product: any) => product.id.toString() === id)
        if (!product) {
            throw new Error(`Product with ID ${id} not found`);
        }
        return product;
    } catch (error:any) {
        throw new Error(error.message);
    }
}