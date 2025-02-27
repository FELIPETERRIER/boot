const db = require('../dataBase/dataBase')
const login ={

postLoginUsuarioModel: async (usuario) => {
    
       
        const loginUsuario = Object.values(usuario);
        
      
        const loginOkUsuario  = await db.query('SELECT (nome,password) from usuarios',+usuario);

       
       
        /*if (loginOkUsuario == loginUsuario) {
           
            console.log('certo miseravi!')
        }else{
            console.log('energumeno')
        }*/
    }
}



module.exports = login

