const usuarios = require('../models/usuariosModels');
const cpfOK = require('../apis/cpfValidado');
const nomeOK = require('../apis/validaNome');
const senhaOK = require('../apis/validaSenha');




const getUsuarios = async (req, res) => {
    try {
        const usuario= {...req.body}; 
        
        const todosUsuarios = await usuarios.getUsuarioModel(usuario);
        res.status(200).json(todosUsuarios);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const postUsuarios = async (req, res) => {
    const usuario= {...req.body}

    const cpfParaValidar =usuario.cpf;  
    const senhaParaValidar = usuario.password;    
    const cpfValidado =cpfOK.validaCpf(cpfParaValidar);
    const senhaValidada = senhaOK.validaSenha(senhaParaValidar)
    console.log(senhaValidada)

    let nomeParaValidar = usuario.nome;   
    const nomeValidado = nomeOK.validaNome(nomeParaValidar);    

    if(cpfValidado && nomeValidado === true && senhaValidada === true) {       
       {         
        const postUsuarios = await usuarios.postUsuarioModel(usuario);      
        res.status(200).json(postUsuarios);}     
       }

        else  {
       console.log( "Credenciais invalidas")
    }
        
    
 
}

module.exports = {getUsuarios,postUsuarios}