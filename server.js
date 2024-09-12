const express = require('express');
const app = express();
const port= 3001;

const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));




app.listen(port,()=>{
    console.log("Servidor rodando na porta " +port)
})