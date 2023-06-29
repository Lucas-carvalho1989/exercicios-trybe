const sum = require('./javascript');
test('verifica se a soma de 2 e 3 é 5',() => {
expect(sum(2, 3)).toBe(5);
})

// foi feita uma função sum para soma de dois valores no arquivo javascript.js
// e foi exportada pelo module.exports = sum;
//depois foi feito uma constante com o nome da função e atribuida o require(./javascript);
//dpois foi feito o test com dois paramentros aque é a descrição do que vai ser feito e uma arrow function que recebe o expect(sum)) e logo apos o math que nessa caso foi o .toBe()
//
//
