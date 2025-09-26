import {useState, useEffect} from "react"

const ProductList = ()=>{

    const [list, setList] = useState([])

    useEffect(()=>{
        async function loadProducts() {
            try{
                const req = await fetch("http://localhost:3000")
                const res = await req.json()
                console.log(res)
            }
            catch(err){
                console.error(err)
            }
        }
    },[])

    return(
        <div>Product List</div>
    )
}

export default ProductList