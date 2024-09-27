
const dataAtual = () => {
   let oi = new Date().toLocaleDateString();
   return(oi)
  
   
}
const horAtual = () =>{
    let foi = new Date().toLocaleTimeString()
    return(foi)
}


module.exports = {dataAtual,horAtual}

