let $ = document.querySelector.bind(document);
let hoje = moment().locale('pt-br');
let arrayMeses = [];
let ulLista = $('.lista');
let ulContador = $('.contador');
let qtde = 0;

function renderizar(index) {
    let liLista = document.createElement('li');
    let liContador = document.createElement('li');
    liLista.appendChild(document.createTextNode(arrayMeses[index]));
    ulLista.appendChild(liLista);
    liContador.appendChild(document.createTextNode(qtde));
    ulContador.appendChild(liContador);
}

for (let index = 0; index < 12; index++) {
    const hojeFormatado = hoje.format('MMMM');
    arrayMeses.push(hojeFormatado);
    hoje.add(1, 'months');

    renderizar(index);
}

$('.btn').addEventListener("click", () => {
    arrayMeses.filter((item, index) => {
        if(item.indexOf($('input').value) != -1) {
        }
        console.log(arrayMeses[index].indexOf('a', 0));
    });
});