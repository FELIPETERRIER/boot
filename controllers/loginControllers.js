const usuarios = require('../models/loginModel');



const loginUsuarios = async (req,res) =>{
    try {
        const usuario= {...req.body}; 
        
        const loginUsuario = await usuarios.getUsuarioModel(usuario);
        res.status(200).json(todosUsuarios);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}