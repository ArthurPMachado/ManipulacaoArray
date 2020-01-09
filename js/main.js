let $ = document.querySelector.bind(document);
let hoje = moment().locale('pt-br');
let arrayMeses = [];
let lista = $('.lista');
let contador = $('.contador');
let qtde = 0;

for (let index = 0; index < 12; index++) {
    const hojeFormatado = hoje.format('MMMM').toLowerCase();
    arrayMeses.push(hojeFormatado);
    hoje.add(1, 'months');
    
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(qtde));
    contador.appendChild(li);
    lista.innerHTML = arrayMeses;
}

$('.btn').addEventListener("click", () => {
    arrayMeses.filter((item, index) => {
        
    });
});