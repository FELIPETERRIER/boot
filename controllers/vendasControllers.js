const vendas = require('../models/vendasModels');


const getVendas = async (req, res) => {
    try {

        const todasVendas = await vendas.getVendasModel();
        res.status(200).json(todasVendas);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const postVendas = async (req, res) => {
    const vendas= {...req.body}    
    try {

        const postVendas = await vendas.postVendasModel(vendas);
        res.status(200).json(postVendas);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}

module.exports = {getVendas,postVendas}