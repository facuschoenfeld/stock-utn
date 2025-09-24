import { DataTypes, Model } from "sequelize";
import {sequelize} from "../config/db.mjs"

export class Product extends Model {}

// SE CREA EL MODELO PRODUCTO QUE SE USARÁ EN LA BASE DE DATOS
Product.init(
    {
        //id se crea automaticamente
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'Product',
        tableName: 'products',
    }
)