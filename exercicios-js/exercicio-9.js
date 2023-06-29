//Escreva um algoritmo que, dado um valor n, sendo n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n;

let n = 5;


for ( indexLinha = 1;indexLinha <= n;indexLinha +=1){
let linhaAsterisco = "";
for (indexColunas = 1; indexColunas <= n; indexColunas +=1){
    linhaAsterisco += "* "
};
console.log(linhaAsterisco);
};
// se tiver duvida faz uma depuração .