const validaNome = (nome) =>{
let nome1 = nome.split(' ')
nome1.forEach((e)=>{
    if(e.length>=2){       
      console.log(e)
    }else{
        return false
       
    }
    
   
})}

module.exports={validaNome}


    


