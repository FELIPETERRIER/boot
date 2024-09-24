const db = require('../dataBase/dataBase');


const compras = {
    getUsuarioModel: async () => {
        try {
            const resultadoCompras  = await db.query('select * from compras');
           
            
            if (resultadoCompras.rowCount == 0) {
                throw "Nenhuma compra realizada!"
            }
            return resultadoCompras.rowCount;
        } catch (error) {
            throw error;
        }
    },
    postUsuarioModel: async (compras,nome) => {
        try {
            const comprasUsuario = Object.values(compras)
            
            const resultadoCompras  = await db.query('INSERT into usuarios (nome) VALUES($1)returning ID  ',comprasUsuario);  
            
            if (resultadoCompras.rowCount == 0) {
                throw "Falha no cadastro do usuario"
            }
            return resultadoCompras.rows;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = compras