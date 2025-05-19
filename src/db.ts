import pg from 'pg';
import { Sequelize } from 'sequelize';

const DB_URL = process.env.DB_URL || ""
export const sequelize = new Sequelize(DB_URL, {
    dialect: 'postgres',
    dialectModule: pg
})