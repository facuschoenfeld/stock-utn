// GUIA https://expressjs.com/en/guide/routing.html
import dotenv from "dotenv"
import { Product } from "./models/products.mjs"
import {sequelize} from "./config/db.mjs"
import cors from "cors"
import express from "express"

// Crear servidor Express
const app = express()
dotenv.config()
app.use(cors())
// Agregar a express el soporte para JSON
app.use(express.json())

// Crear Ruta GET para obtener productos
app.get('/',async function(req, res){
    res.json({
        mensaje: "ruta get"
    })
})

// Crear Ruta POST para crear producto
app.post('/',async function(req, res){
    const body = req.body
    const product = new Product({
        name: body.name,
        price: Number(body.price),
        stock: Number(body.stock)
    })

    await product.save()
})

// Crear Ruta PUT para modificar producto
app.put('/', async function(req, res){
    res.json("ruta put")
})

// Crear Ruta DELETE para eliminar un producto
app.delete('/', async function(req, res){
    res.json("ruta delete")
})

// Iniciar servidor express y agregar sequelize.sync()
app.listen(3000,()=>{
    console.log("Servidor iniciado en http://localhost:3000")
    sequelize.sync()
})

