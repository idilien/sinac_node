import { Sequelize } from "sequelize";
import dotenv from 'dotenv/config';

const Op = Sequelize.Op
const db = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like
      },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle: 10000
    },
  
});

export default db;