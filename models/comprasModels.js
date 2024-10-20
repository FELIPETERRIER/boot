const db = require('../dataBase/dataBase');
const data = require('../apis/date')


const compras = {
    getComprasModel: async () => {
        try {
            console.log(data.dataAtual());

            console.log(data.horAtual())

            const resultadoCompras  = await db.query('select * from compras');
           
            
            if (resultadoCompras.rowCount == 0) {
                throw "Nenhuma compra realizada!"
            }
            return resultadoCompras.rowCount;
        } catch (error) {
            throw error;
        }
    },
    postComprasModel: async (compra_realizadas) => {
        try {
            const data_compra = data.dataAtual()
            const hora_compra = data.horAtual()            
            let valores = Object.values(compra_realizadas);         
            
            const resultadoCompras  = await db.query('INSERT INTO compras(nome_moeda,valor_compra_reais,quantidade_btc) VALUES($1,$2,$3)returning '  ,valores+ ' ' +data_compra+' '+hora_compra);  
            
            if (resultadoCompras.rowCount == 0) {
                throw "Falha no cadastro do usuario"
            }
            return resultadoCompras;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = compras