const db = require('../dataBase/dataBase');
const data = require('../apis/date')


const compras = {
    getComprasModel: async () => {
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
    postComprasModel: async (compra_realizada) => {
        try {
            const data_compra = data.dataAtual()   
            console.log(data_compra)                        
            let valores = Object.values(compra_realizada);  
            valores.push(data_compra);     
                   
            
            const resultadoCompras  = await db.query("INSERT INTO compras(moeda,valor_em_real,quantidade,data_compra)"+
                "VALUES ($1,$2,$3,$4)",valores); 
            
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