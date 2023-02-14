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
    "haEspaco"
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
        "valueMissing":"Preencha o campo de confirmar senha."
    },

    
}

function haEspaco(campo){
    campo.value = campo.value.trim();//tirar os espaços no começo e no fim da string
    const entrada =  campo.value;   
    return entrada.includes(" ");
}




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
    if(apiValidou && (campo.name == "cadastroNome" || campo.name == "cadastroUsuario" || campo.name == "cadastroSenha")){        
        if(haEspaco(campo)){
            mensagem = mensagensErro[campo.name]["haEspaco"];
            desenvolvedorValidou = false;
        }
        else{
            desenvolvedorValidou = true;
        }    
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

