const db = require('../dataBase/dataBase');


const usuarios = {
    getUsuarioModel: async () => {
        try {
            const resultadoUsuario  = await db.query('select * from usuarios');
           
            
            if (resultadoUsuario.rowCount == 0) {
                throw "Nenhum usuario encontrado"
            }
            return resultadoUsuario.rowCount;
        } catch (error) {
            throw error;
        }
    },
    postUsuarioModel: async (usuario,nome) => {
        try {
            const cadastroUsuario = Object.values(usuario)
            
            const resultadoUsuario  = await db.query('INSERT into usuarios (nome) VALUES($1)returning ID  ',cadastroUsuario);  
            
            if (resultadoUsuario.rowCount == 0) {
                throw "Falha no cadastro do usuario"
            }
            return resultadoUsuario.rows;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = usuarios