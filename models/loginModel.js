const db = require('../dataBase/dataBase');
const jwt = require('jsonwebtoken');





const login ={

postLoginUsuarioModel: async (usuario) => {
    
        const SECRET = process.env.SECRET
        const loginUsuario = Object.values(usuario);      
        const loginOkUsuario  = await db.query('SELECT cpf,password,id FROM usuarios');       
        const encontrado = loginOkUsuario.rows.some(row => 
            Object.values(row).every((valor, index) => valor === loginUsuario[index])
        );  
        
        if (encontrado) {
            const userID = loginUsuario[2];         
            const acessToken = jwt.sign(userID,SECRET/*,{expiresIn:300}*/)           
        } else {

            console.log('CPF ou senha incorretos.');
            console.log(error);
        res.status(401).json({
            codigoErro: 401,
            mensagem: error
        });
        }
    }
}



module.exports = login

