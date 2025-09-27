import Input from "./input"
import { useState } from "react"

const ProductForm = ()=>{

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")

    async function handleSubmit(e){
        e.preventdefault()

        try{
            const config = {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    price: price,
                    stock: stock
                })
            }
            const url = "http://localhost:3000/"
            const req = await fetch(url, config)
            const res = await req.json()

            alert("Producto cargado")
        }
        catch(err){
            console.error(err)
            alert("Ocurrió un error al cargar productos")
        }
    }

    return(
        <div className="mt-5 p-5 gap-5 flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold">Producto</h2>
            <form 
            className="flex flex-col gap-2" 
            onSubmit={handleSubmit}>
                <Input
                type="text"
                name="Nombre Producto"
                placeholder="Ingrese el producto"
                value={name}
                onChange={(e)=>{
                    setName(e.target.value)
                }}/>
                <Input
                type="number"
                name="Precio"
                placeholder="Ingrese el precio"
                value={price}
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}/>
                <Input
                type="number"
                name="Cantidad"
                placeholder="Ingrese la cantidad"
                value={stock}
                onChange={(e)=>{
                    setStock(e.target.value)
                }}/>
                <button className="p-2 border-[1px] bg-slate-900 text-white rounded-2xl hover:bg-green-500">
                    Cargar
                </button>
            </form>
        </div>
    )
}

export default ProductForm