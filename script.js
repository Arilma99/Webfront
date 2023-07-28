
/* introdução  a git e java script
 */

var nome = "ari"
let idade = 24
const anoNascimento = 1999; /* cont(connstnte) quando o dado naõ será alterado */
let idadeEsposa = "24" 
let idadeString = "24"


/* 
= atribuição 
== comparar se é igual
=== comparar se é exatamente igual a vareavel 
[] = smbolo universal para lista
padrao java - () {}
if - comparação
console.log- print(mostrar na tela)
else - se diferente
else if - alguma outra opção
swith case - se for mais de 4(quatro) opções

let -Um bloco é uma porção de código cercado por {}.
 Um bloco vive dentro dessas chaves. 
Tudo o que estiver cercado por chaves é um bloco.(um var atualizado)

var - 
*/

/* var  isOld = true;


if (condition){

console.log(igual)

}else{
    console.log(diferente)
}
 */
/* Array

acessamos o array fazendo ref ao index


*/
/* let num =98
const pi = 3.14




let lista =[1,2,3,4,5,6]

for (let index = 0; index <lista.length; index++) {
    const element = lista[index];

    console.log(element)

}


 */












/* Inputs */
    const titulo = document.getElementById("titulo") 
    const nomeInput= document.getElementById("nome") 
    const email= document.getElementById("email") 
    const telefone= document.getElementById("telefone")
    
    /* Outputs */
    const resultado= document.getElementById("resultado") /* resultado para nome */
    const resultado1= document.getElementById("resultado1") /* // // email */
    const resultado2= document.getElementById("resultado2") /*  //  // telefone */

    console.log(titulo.textContent)
     
    titulo.textContent = "Senai cotia 2023"  /* conteudo  de texto do h1 */
    function salvar(){
        resultado.textContent = nomeInput.value
        resultado1.textContent = email.value
        resultado2.textContent = telefone.value

    }

