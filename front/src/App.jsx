import {BrowserRouter, Routes, Route} from "react-router"
import ProductList from "./components/productlist"
import ProductForm from "./components/productform"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/product" element={<ProductForm/>}/>
        <Route path="*" element={<h1>Error 404: No encontrado</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App