const express = require('express');
const app = express();
const port= 3001;
const usuariosControllers = require( './controllers/usuariosControllers');
const comprasControllers = require('./controllers/comprasControllers');
const vendasControllers = require('./controllers/vendasControllers');
const moedasControllers = require('./controllers/cadastroControllersMoedas');
const loginControllers = require('./controllers/loginControllers');



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

//Vendas
app.get('/vendas',vendasControllers.getVendas);
app.post('/vendas',vendasControllers.postVendas);

//cadastro moedas
app.get('/moedas',moedasControllers.getCadastroMoedas);
app.post('/moedas',moedasControllers.postCadastroMoedas);
app.put('/moedas/:id_moedas',moedasControllers.putCadastroMoedas);
app.delete('/moedas/:id_moedas',moedasControllers.delCadastroMoedas);

//login
app.get('/login',loginControllers.loginUsuarios )

app.listen(port,()=>{
    console.log("Servidor rodando na porta " +port)

})