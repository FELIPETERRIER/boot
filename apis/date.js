
const dataAtual = () => {
   let oi = new Date().toLocaleDateString("pt-BR");
   return oi
 
   
   
}
const horAtual = () =>{
    let foi = new Date().toLocaleTimeString()
    return(foi)
}


module.exports = {dataAtual,horAtual}

