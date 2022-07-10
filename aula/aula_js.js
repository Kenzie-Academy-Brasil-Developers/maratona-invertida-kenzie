// console.log("Hello World!")

// Comentário de uma linha
/** Comentário de múltiplas linhas
 * zxczx
 * 
 * zxczxc
 * sfcc
 * zczxczxc
 * zxczxczxc
 * 
*/

// VARIÁVEIS
let fruta = "Maçã" 

fruta = "Morango"

const filmePreferido = "Star Wars"

// TIPOS DE DADOS
//STRING
let comida = "Torta de banana"
let saudacao = "Oi! Tudo bem? Hoje é dia 09"

//NUMBER
let ano = 2022
let dia = 09

// console.log(ano)

//BOOLEANO OU BOOLEAN
let serProgramadorEm2022 = true
let churrosEhRuim = false

//ARRAY
let lista = [9, "julho", false, ["tchau", 29]]

//Para acessar um elemento do array pelo índice
//lista[0]
// console.log(lista[0])
// console.log(lista[1])
// console.log(lista[2])
// console.log(lista[3])

//para saber o comprimento do array
// console.log(lista.length)

//Para adicionar um elemento no array
let terraNatal = "Manaus/Am"

lista.push(terraNatal)
// console.log(lista)

//OBJETO

/*
- NOME
- IDADE
- CIDADE
*/

let pessoa = {
    nome: "Maria",
    idade: 29,
    cidade: "Manaus",
}

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.idade)

/*
Sintaxe para criar uma nova chave:

nomeVariavel['nome da chave'] = valor
*/

pessoa["comida"] = "hamburgão"
// console.log(pessoa)

// OPERADORES LÓGICOS
/*
=== Extritamente igual => verifica se o valores são iguais e do mesmo tipo
*/

let numeroUm = 10
let numeroDois = 20
let numeroTres = "30" 
let numeroQuatro = "20"
let numeroCinco = 10

numeroQuatro === numeroDois //false
numeroUm === numeroCinco // true

/*
== Igualdade => avalia se os valores são iguais, independente de tipo
*/

numeroDois == numeroQuatro //true
numeroUm == numeroDois //false

/*
!= Diferente => avalia se os valores são diferentes, independente de tipo de dado.
*/

//console.log(numeroDois != numeroQuatro) //false
//console.log(numeroUm != numeroTres) // true

/*
!== Não Idêntico => avalia se os valores E os tipos são diferentes
*/

numeroDois !== numeroQuatro //true

/*
< Menor que
> Maior que
<= Menor ou igual
>= Maior ou igual
*/

/*
TABELAS VERDADE

&& => E
    TRUE && TRUE    => TRUE
    TRUE && FALSE   => FALSE
    FALSE && TRUE   => FALSE
    FALSE && FALSE  => FALSE
*/

let situacaoUm = true
let situacaoDois = false

//console.log(situacaoUm && situacaoDois)

/*
|| => OU
    TRUE || TRUE  => TRUE
    TRUE || FALSE => TRUE
    FALSE || TRUE => TRUE
    FALSE || FALSE => FALSE
*/

// console.log(situacaoUm || situacaoDois)

/*
ESTRUTURA CONDICIONAL

SE CHOVER
VOU DORMIR

SE NÃO
VOU NO ACADEMIA

opção1:
if(condição) {
    //código a ser executado caso a condição passe
}

opção2:
if(condição) {
    //código a ser executado caso a condição passe
} else {
    // código a ser executado caso a condição do if não passe
}

opção3:
if(condição) {
    //código a ser executado caso a condição passe
} else if (condição) {
    // código a ser executado caso a condição do if não passe
} else {
    // código a ser executado caso a condição do else if não passe
}

*/

let chuva = false
let nublado = false

// if (chuva === true) {
//     console.log("Vou dormir")
// } else if (nublado === true) {
//     console.log("Vou tomar um cafézin!")
// } else {
//     console.log("Vou pra academia")
// }

/*
ESTRUTURA DE REPETIÇÃO => FOR LOOP

Sintaxe:
for (inicialização (variável contadora); condição; incremento) {
    //código a ser executado
}
*/

let cidades = ["Manaus", "São Paulo", "Recife", "Goiânia", "Porto Alegre", "Boa Vista"]

// for (let i = 0; i < cidades.length; i++) {
//     console.log(cidades[i], i)
// }

// for (let i = 0; i < 5; i++) {
//     if (i % 2 === 0) {
//         console.log("par" + i)
//     } else {
//         console.log("ímpar" + i)
//     }
// }

/*
FUNÇÃO

Sintaxe:
function nomeDaFunção(parâmetros => são opcionais) {
    //código aqui
}
*/

function soma(a, b) {
    // console.log(a + b)
    return a + b
}

let sum = soma(353, 927)
console.log(sum)