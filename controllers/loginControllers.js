const login = require('../models/loginModel');

const loginUsuarios = async (req,res) =>{
    try {
        const usuario= {...req.body};
         
        
        const loginUsuario = await login.postLoginUsuarioModel(usuario);        
        res.status(200).json(loginUsuario);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
module.exports = {loginUsuarios}