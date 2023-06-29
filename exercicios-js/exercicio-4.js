//Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”. 

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;

for(let index = 0; index < numbers.length; index += 1){
    somaNumbers = somaNumbers + numbers[index] 
    ;
}
let mediaNumbers = somaNumbers / numbers.length;

if(mediaNumbers > 20){
    console.log('O valor da média aritmética é maior que 20');
}
else{console.log('O valor da média aritmética é menor ou igual a 20')};
