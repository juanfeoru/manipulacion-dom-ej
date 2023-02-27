const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#resultado');

form.addEventListener('click', sumaInputs);

function sumaInputs(event) {
    console.log(event);
    event.preventDefault();
    let number1 = parseInt(input1.value);
    let number2 = parseInt(input2.value); 
    let sumaNums = number1 + number2
    console.log(sumaNums)
    result.innerHTML = "Resultado: " + sumaNums;
}

