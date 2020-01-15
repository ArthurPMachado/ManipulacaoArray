"use strict";
var $ = document.querySelector.bind(document);
var hoje = moment().locale('pt-br');
var arrayMeses = [];
var lista = $('.lista');
for (var index = 0; index < 12; index++) {
    var hojeFormatado = hoje.format('MMMM').toLowerCase();
    arrayMeses.push(hojeFormatado);
    hoje.add(1, 'months');
    lista.innerHTML = arrayMeses;
}
