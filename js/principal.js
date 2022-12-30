// //Uso da variável e textContent
// var titulo = document.querySelector('h1')
// titulo.textContent = "Texto que eu quero"[1..5]

//Calculando IMC 
//1º Criar os acessos
var infopeso = document.querySelector(".info-peso")
var infoaltura = document.querySelector(".info-altura")
var infoimc = document.querySelector(".info-imc")

//2ºReceber os valores a partir dos acessos
var peso = infopeso.textContent
var altura = infoaltura.textContent
var imc = infoimc.textContent

//3º Calcular IMC
imc = peso / (altura * altura)

//4º Imprimir resultado
infoimc.textContent = imc