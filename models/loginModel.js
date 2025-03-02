const db = require('../dataBase/dataBase')
const login ={

postLoginUsuarioModel: async (usuario) => {
    
       
        const loginUsuario = Object.values(usuario);
        //console.log(loginUsuario    )
           
      
        const loginOkUsuario  = await b.query('SELECT cpf,password FROM usuarios')   ;
        console.log(loginOkUsuario.rows)
        console.log(loginUsuario)
       
       
        if (loginOkUsuario.rows == loginUsuario) {
           
            console.log('certo miseravi!')
        }else{
            console.log('energumeno')
        }
    }
}



module.exports = login

