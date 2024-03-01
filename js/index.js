document.querySelector('#calcular').addEventListener('click', e => {
    let numero1 = document.querySelector('#valor1').value;
    let numero2 = document.querySelector('#valor2').value;
    let operador = document.querySelector('#operador').value;

    let total = calcular(numero1, numero2, operador);

    document.querySelector('#resultado').innerHTML = total;
});

/*
// function calcular(num1, num2, operador) {
//     return eval(`${numero1} ${operador} ${numero2}`);
}*/

let calcular = (numero1, numero2, operador) => {
    return eval(`${numero1} ${operador} ${numero2}`);
}
