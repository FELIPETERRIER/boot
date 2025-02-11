const validaNome = (nome) =>{

let nome1 = nome.split(' ')
for (const nome2 of nome1) {
      if(nome2.length > 2){
        return true
    }else{
      return false
    }
  }
}
module.exports={validaNome}


    


