let $ = document.querySelector.bind(document);
let hoje = moment().locale('pt-br');
let arrayMeses = [];

for (let index = 0; index < 12; index++) {
    const hojeFormatado = hoje.format('MMMM');
    arrayMeses.push(hojeFormatado);
    hoje.add(1, 'months');
}

$('.lista').innerHTML = arrayMeses;