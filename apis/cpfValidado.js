const validaCpf = (cpf) => { 
    
    
    const invalido ='00000000000'    
    
    let multiplicador = 10;
    let acumulador = 0;
    for (let i = 0; i < cpf.length - 2; i++) {
        acumulador = acumulador + cpf[i] * multiplicador--;
    };  
    
    let resto = acumulador % 11;
    let dig1 = 0;
    if (resto > 1) {
        dig1 = 11 - resto;
    }
    multiplicador = 11;
    acumulador = 0;
    for (let i = 0; i < cpf.length - 1; i++) {
        acumulador = acumulador + cpf[i] * multiplicador--;
    };
   
    resto = acumulador % 11;
    let dig2 = 0;
    if (resto > 1) {
        dig2 = 11 - resto;
    }
    let dig = (String(dig1) + String(dig2));
    
    if (cpf.substring(9, 11) == dig && cpf != invalido) {
        return true;
    }   
    else {
        return false;        
    }
  
}

module.exports ={validaCpf}

