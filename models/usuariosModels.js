const db = require('../dataBase/dataBase');
const usuarios = {
    getUsuarioModel: async (usuario) => {
        try {
           
            const resultadoUsuario  = await db.query('select * from usuarios', +usuario);  
            
            if (resultadoUsuario.rowCount == 0) {
                throw "Nenhum usuario encontrado"
            }
            return resultadoUsuario.rows;
        } catch (error) {
            throw error;
        }
    },
    postUsuarioModel: async (usuario) => {
        try {
           
            const cadastroUsuario = Object.values(usuario);
          
            const resultadoUsuario  = await db.query('INSERT into usuarios (nome,cpf,data_de_nascimento,pais,estado,cidade,logradouro,numero,complemento,ddd,telefone_alternativo,ddd_whatsapp,whatsapp) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)returning ID  ',cadastroUsuario);
           
           
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