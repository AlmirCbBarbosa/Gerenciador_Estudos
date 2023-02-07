import * as validacao from "./validacao.js";

const iptcampos = document.querySelectorAll('[required]');
console.log(iptcampos);

const mensagensDeErro = { cadastroNome:{naovazio:"O campo de nome deve ser preenchido",
minimoCaractere:"O campo nome deve ter no mínimo 5 caracteres"}}



iptcampos[0].addEventListener('click', (evento)=>{
    let elemento = evento.target;
    
    let mensagem = mensagensDeErro[elemento.id]["naovazio"];
    console.log(mensagem)    ;
})