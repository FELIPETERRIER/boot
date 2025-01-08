
const db = require('../dataBase/dataBase');



const moedas = {
    getMoedasModel: async () => {
        try {
            
            const moedasCadastradas  = await db.query('select * from moedas');
           
            
            if (moedasCadastradas.rowCount == 0) {
                throw "Nenhuma moeda cadastrada!"
            }
            return moedasCadastradas.rows;
        } catch (error) {
            throw error;
        }
    },
    postMoedasModel: async (moeda_cadastrada) => {
        try {
                                 
            let valores = Object.values(moeda_cadastrada);     
                   
            
            const cadastroMoedas  = await db.query("INSERT INTO moedas(nome_moeda,abreviacao)"+
                "VALUES ($1,$2) returning id_moedas",valores); 
            
            if (cadastroMoedas.rowCount == 0) {
                throw "Falha no cadastro da moeda!"
            }
            return cadastroMoedas;
        } catch (error) {
            throw error;
        }
    },

        putMoedasModel: async (id) => {
            try {
                             
                let valores = Object.values(id);     
               
        
                const atualizaMoedas  = await db.query("UPDATE moedas set(nome_moeda,abreviacao,id_moedas)=($1,$2,$3) where id_moedas = $3",valores); 
      
                if (atualizaMoedas.rowCount == 0) {
                    throw "Falha no cadastro da moeda!"
                }
                return atualizaMoedas;
            } catch (error) {
                throw error;
            }
   
},
    deleteMoedasModel: async (id) => {
        
    try {
        
        let delMoedas = Object.values(id);            
        const deleteMoedas  = await db.query('DELETE from moedas WHERE id_moedas = $1', delMoedas );
       
        return deleteMoedas
        
       
    } catch (error) {
        throw error;
    }
    
},
}

module.exports = moedas