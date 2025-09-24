// GUIA https://expressjs.com/en/guide/routing.html
import dotenv from "dotenv"
import { Product } from "./models/products.mjs"
import { Sequelize } from "sequelize"
// Importar Express
import express from "express"

// Crear servidor Express
const app = express()
dotenv.config()

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
    res.json({
        mensaje: "ruta post"
    })
})

// Crear Ruta PUT para modificar producto
app.put('/', async function(req, res){
    res.json("ruta put")
})

// Crear Ruta DELETE para eliminar un producto
app.delete('/', async function(req, res){
    res.json("ruta delete")
})

// Iniciar servidor express
app.listen(3000,()=>{
    console.log("Servidor iniciado en http://localhost:3000")
})

// Dentro de la función hay que agregar sequelize.sync()
