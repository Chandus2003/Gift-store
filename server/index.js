import express from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js'


const app=express();
dotenv.config();

const PORT=8000;

const USERNAME= process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
connection(USERNAME,PASSWORD);
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT} `))