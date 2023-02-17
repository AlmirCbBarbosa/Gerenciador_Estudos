/*Notas
    -Futuramente este será o script padrão para a validação de formulários.
    -Possui validação para:
        -quantidade mínima de caracteres;
        -quantidade máxima de caracteres;
        -se o campo não esta vazio
*/



const tiposErrosApi =[
    "tooLong",//tem mais caracteres que o permitido
    "tooShort",// não possui a quantidade mínima de caracteres
    "valueMissing",//campo vazio        
]

const tiposErroPersonalizados = [
    "haEspaco",
    "ehDiferente"
]


//mensagens personalizadas de erros
const mensagensErro ={//a chave principal são as ids
    "cadastroNome":{
        "tooShort":"Coloque 5 ou mais caracteres no campo nome.",
        "tooLong":"Coloque 25 ou menos caracteres no campo nome.",
        "valueMissing":"Preencha o campo nome.",
        "haEspaco":"Não pode haver espaço no campo nome."
    },
    "cadastroSobrenome":{
        "tooShort":"Coloque 5 ou mais caracteres no campo sobrenome.",
        "tooLong":"Colque 25 ou menos caracteres no campo sobrenome.",
        "valueMissing":"Preencha o campo sobrenome."
    },
    "cadastroUsuario":{
        "tooShort":"Coloque 5 ou mais caracteres no campo usuário.",
        "tooLonge":"Coloque 25 ou menos caracteres no campo usuário.",
        "valueMissing":"Preencha o campos de usuário.",
        "haEspaco":"Não pode haver espaço no campo de usuário."
    },
    "cadastroSenha":{
        "tooShort":"Coloque 5 ou mais caracteres no campo senha.",
        "tooLong":"Coloque 25 ou menos caracteres no campo senha.",
        "valueMissing":"Preencha o campos de senha.",
        "haEspaco":"Não pode haver espaço no campo senha."
    },
    "confirmaSenha":{
        "tooShort":"Coloque 5 ou mais caracteres no campo confirmar senha.",
        "tooLong":"Coloque 25 ou menos caracteres no campo confirmar senha.",
        "valueMissing":"Preencha o campo de confirmar senha.",
        "ehDiferente" :"O campo confirma senha é diferente de senha."
    },

    "iptUsuario":{
        "tooShort":"Coloque 5 ou mais caracteres no campo usuário.",
        "tooLong":"Coloque 25 ou menos caracteres no campo usuário.",
        "valueMissing":"Preencha o campos de usuário.",
        "haEspaco":"Não pode haver espaço no campo de usuário."
    },
    "iptSenha":{
        "tooShort":"Coloque 5 ou mais caracteres no campo senha.",
        "tooLong":"Coloque 25 ou menos caracteres no campo senha.",
        "valueMissing":"Preencha o campos de senha.",
        "haEspaco":"Não pode haver espaço no campo senha."
    }

    
}

function haEspaco(campo){
    campo.value = campo.value.trim();//tirar os espaços no começo e no fim da string
    const entrada =  campo.value;   
    return entrada.includes(" ");
}



let senha = "";//armazena o valor da senha para comparar com confirmar senha
export function validarCampo(campo){//função que valida as entradas
    campo.setCustomValidity('');
    let mensagem = "";
    let apiValidou = false;
    let desenvolvedorValidou = true;
    
        

    tiposErrosApi.every((erro)=>{ // itera ate encontar alguma erro e não executa outros testes, senão encontra nenhum erro passo por todos os testes
        if(campo.validity[erro]){
            apiValidou = false;
            mensagem = mensagensErro[campo.name][erro];                       
                        
        }
        else{
            apiValidou = true;            
        }
        return apiValidou
    });

    //----------testes personalizados---------//
    //se passar por todos os testes da api será realizados estes
    if(apiValidou && (campo.name == "cadastroNome" || campo.name == "cadastroUsuario" || campo.name == "cadastroSenha" || campo.name == "iptUsuario" || campo.name == "iptSenha")){        
        
        if(haEspaco(campo)){
            mensagem = mensagensErro[campo.name]["haEspaco"];
            desenvolvedorValidou = false;            
        } 

        if(campo.name == "cadastroSenha"){
            senha = campo.value;
            console.log("O valor da senha é: " + senha);//pode apagar
        }          
    }
    else if(campo.name == "confirmaSenha" && campo.value != senha){
        mensagem = mensagensErro[campo.name]["ehDiferente"];
        desenvolvedorValidou = false;
        console.log("O valor da senha é: " + senha);//pode apagar
        console.log("O valor de confirma senha é: " + campo.value);//pode apagar
    }
    else{
        desenvolvedorValidou = true;
    }



    const mensagemErro = campo.parentNode.querySelector('.msgErro');
    const inputValidado = campo.checkValidity();
    

    if(!inputValidado || !desenvolvedorValidou){
        mensagemErro.style.color = 'red';
        mensagemErro.innerText = mensagem;
    }
    else{
        mensagemErro.style.color = 'transparent';
        mensagemErro.innerText = "*";
    }
    console.log(apiValidou);
    console.log(desenvolvedorValidou);
    console.log(apiValidou && desenvolvedorValidou);
    return (apiValidou && desenvolvedorValidou)
}

