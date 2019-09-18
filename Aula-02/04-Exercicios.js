/* Você foi contratada para criar a lógica de um aplicativo que controla pedidos em um bar. Para funcionar sua aplicação precisa ter uma lógica capaz de executar as seguintes operações: 
1) Guardar o nome e o número da mesa do cliente
2) Ter uma função para somar os valores do pedido ao total
3) Ter uma função que permita subtrair do total um valor pago (aquela miga que sempre vai embora antes e deixa uma parte paga)
4) Ter uma função para dividir o valor da conta entre as pessoas da mesa
5) Mostrar na tela o nome, número da mesa, total de pessoas, total da conta e valor que cada um deve pagar
*/
let mesa_cliente = 1

let nome= "João"

let conta=0



function pedido(){
	let consumo= parseFloat(prompt("Digite valor do consumo"))
	let total=conta+consumo
	conta=total

}

function subtracao(){
	let pagamento= parseFloat(prompt("Qual valor você gostaria de pagar?"))
	total=contra-pagamento
	conta=pagamento
}

//Escreva a função que retorne o resultado apresentado
// ola() -> "Hello, world!"
// ola(0) -> "Hello, world!"
// ola('Javascript") -> "Hello, world!"
function ola(parametro){
	return"Hello,world!"
}
//ou
function ola(){
	return "Hello,world!"
}

// calcule(5) -> 25
// calcule(2) -> 4

function calcule(x){
	return x*x
}



//Calcule o resultado da função a seguir: 
function confusion(a, b) {
	a = 2 * a + b
	return a
}
let x = 2
let y = 5

y = confusion(y, x) 

x = confusion(y, x) 

confusion(1,2)

confusion(y,x)


// Escreva uma função
// em Javascript que recebe
// um número devolve se ele é maior que um número gerado aleatoriamente

function numeroMaiorqueAleatorio (num){
	let numAleatorio = Math.ceil(Math.random()*10)
	console.log(num )
}



// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.

function mostraBinario (numero){
	return numero.toString(2)
	//Para converter binário em número inteiro usa-se o parseInt
	parseInt(numeroBinario,2)

// Escreva uma função em Javascript
// que recebe dois números e retorna o resto da divisão entre eles
function restoDivision(a,b){
	return a%b
}

// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// possuem a mesma quantidade de letras

function compararTamanhoString ("texto1", "texto2"){
	return texto1.leight == texto2.leight
}
// Escreva uma função que recebe um número e retorna true se o número é par e false se for ímpar
function ehPar(numero){
	return numero%2 == 0
}
//ou
function ehPar(numero){
	return !(numero%2)
}
// Escreva uma função que receba uma string e retorne o número correspondente à primeira letra considerando a tabela ascii

function mostrarAsc(texto){
	return texto.charCodeAt(0) //Zero corresponde ao primeiro caracter de uma string
}
// Pesquise uma função (método) que é aplicável à objetos do tipo string e uma aplicável ao tipo número 