//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero

let number = 10 ;
let result = 1;
for( let index = number; index > 0; index -= 1){
    result = result * index ;
}
console.log(result);