const compras = require('../models/comprasModels');
    


const getCompras = async (req, res) => {
    try {
        
        const compra= {...req.body}    
        const todascompras = await compras.getComprasModel();
        res.status(200).json(todascompras);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}
const postCompras = async (req, res) => {
        const compra_realizada ={...req.body}
        console.log(compra_realizada)
    try {

        const postCompras = await compras.postComprasModel(compra_realizada);
        res.status(200).json(postCompras);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            codigoErro: 500,
            mensagem: error
        });

    }
}

module.exports = {getCompras,postCompras}