const express = require('express');
const app = express();
const port= 3001;
const usuariosControllers = require( './controllers/usuariosControllers');
const comprasControllers = require('./controllers/comprasControllers');


app.use(express.json())
app.use(express.urlencoded({extended: true}));
const dotenv = require('dotenv');

dotenv.config();




//Usuarios
app.get('/',usuariosControllers.getUsuarios);
app.post('/usuarios',usuariosControllers.postUsuarios);

//Compras
app.get('/compras',comprasControllers.getCompras);
app.post('/compras',comprasControllers.postCompras);









app.listen(port,()=>{
    console.log("Servidor rodando na porta " +port)

})