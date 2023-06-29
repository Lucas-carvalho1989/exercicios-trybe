//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”. 
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbresImpar = [];

for(let index = 0; index < numbers.length; index +=1) {
    if(numbers[index] % 2 != 0){
    numbresImpar.push(numbers[index])
    }
}
if(numbresImpar.length === 0){
    console.log( 'Nenhum valor ímpar encontrado')
};
console.log(numbresImpar);