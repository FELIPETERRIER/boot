const express = require('express');
const app = express();
const port= 3001;
const usuariosControllers = require( './controllers/usuariosControllers');


//Usuarios
app.get('/usuarios',usuariosControllers.getUsuarios)

const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));








app.listen(port,()=>{
    console.log("Servidor rodando na porta " +port)
    console.log(usuarios)
})