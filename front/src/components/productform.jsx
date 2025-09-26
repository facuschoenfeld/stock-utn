const ProductForm = ()=>{
    async function handleSubmit(e){
        e.preventdefault()
    }

    return(
        <form onSubmit={handleSubmit}>
            <button className="p-2 bg-slate-950 text-white font-bold">
                Enviar
            </button>
        </form>
    )
}

export default ProductForm