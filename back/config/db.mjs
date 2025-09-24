import { Sequelize } from "sequelize"

export const sequelize = new Sequelize("stock","root","root",{
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
})