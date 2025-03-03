const db = require('../dataBase/dataBase');
const jwt = require('jsonwebtoken');
const login ={

postLoginUsuarioModel: async (usuario) => {
    
       
        const loginUsuario = Object.values(usuario);      
        const loginOkUsuario  = await db.query('SELECT cpf,password,id FROM usuarios');       
        const encontrado = loginOkUsuario.rows.some(row => 
            Object.values(row).every((valor, index) => valor === loginUsuario[index])
        );  
        
        if (encontrado) {
            const userID = loginUsuario[2];            
            console.log(userID);
            //jwt.sign(userID),SECRET,
        } else {
            console.log('CPF ou senha incorretos.');
        }
    }
}



module.exports = login

