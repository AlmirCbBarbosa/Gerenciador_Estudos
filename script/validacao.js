/*
    Validação da tela de login

    *campo esta vazio ok
    *valor minimo de  caractere ok
    *valor maximo de caractere ok
    *não pode ter espaço (regex)
    
    --------------------------------
    Validação da tela de cadastro
    *
*/
//se não for validado, retorna falso, ser for validado retorna true

export function naoVazio(iptCampo){
    let extensao = iptCampo.value.length
    if(!extensao)
    {
        return false;
    }
    return true;
}    

export function minimoCaractere(iptCampo, minimo){
    let extensao = iptCampo.value.length
    if(extensao < minimo){
        return false; 
    }
    return true;
}

export function maximoCaractere(iptCampo, maximo){
    let extensao = iptCampo.value.length
    if(extensao > maximo){
        return false; 
    }
    return true;
}
