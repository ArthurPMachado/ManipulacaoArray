const $ = document.querySelector.bind(document);
const hoje = moment().locale('pt-br');
const arrayMeses: string[] = [];
const lista: any = $('.lista');

for (let index = 0; index < 12; index++) {
    const hojeFormatado = hoje.format('MMMM').toLowerCase();
    arrayMeses.push(hojeFormatado);
    hoje.add(1, 'months');

    lista.innerHTML = arrayMeses;
}

$('.btn').addEventListener('click', () => {
    lista.innerHTML = arrayMeses.filter(item => item.includes($('input').value.toLowerCase())).join();
});