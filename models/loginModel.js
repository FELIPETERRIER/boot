const db = require('../dataBase/dataBase')
const login ={

postLoginUsuarioModel: async (usuario) => {
    
       
        const loginUsuario = Object.values(usuario);      
        const loginOkUsuario  = await db.query('SELECT cpf,password FROM usuarios');       
        const encontrado = loginOkUsuario.rows.some(row => 
            Object.values(row).every((valor, index) => valor === loginUsuario[index])
        );
        
        if (encontrado) {
            console.log('Login bem-sucedido!');
        } else {
            console.log('CPF ou senha incorretos.');
        }
    }
}



module.exports = login

