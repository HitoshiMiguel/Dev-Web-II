//Atividade 1

const somar = require('./somar');
const subtrair = require('./subtrair');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

const sinal = "/";
const num1 = 15;
const num2 = 2;

let resultado;

switch (sinal) 
{
    case "+":
        resultado = somar(num1, num2);
        break;

    case "-":
        resultado = subtrair(num1, num2);
        break;
        
    case "*":
        resultado = multiplicar(num1, num2);
        break;
    
    case "/":
        resultado = dividir(num1, num2);
        break;  

    default:
        resultado = "Operação Inválida. Tente novamente!"
        break;
}

console.log(`Resultado: ${resultado}`);

//Atividade 2

const InverterArray = require ('./InverterArray');

const numeros = [1, 2, 3, 4, 5];
const numerosinvert = InverterArray(numeros);

console.log("Números ordem original:", numeros);
console.log("Números invertidos:", numerosinvert);

//Atividade 3

const gerarpares = require ('./gerarpares');

const n = 5;
const numerosPares = gerarpares(n);

console.log(`Os números pares são ${n}:`, numerosPares);