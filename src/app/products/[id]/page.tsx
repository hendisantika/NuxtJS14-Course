async function getProductByID(id: number) {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'GET',
    });
    return response.json();
}

export default async function getProductById({params}: any) {
    const {product} = await getProductById(params.id);

    return (
        <main>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
        </main>
    )
}