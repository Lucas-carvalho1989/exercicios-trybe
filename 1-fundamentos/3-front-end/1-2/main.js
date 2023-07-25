const { error } = require("console");
const { resolve } = require("path");

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber();
    resolve(randomNumber);
  },1000);
});
// promise rejeitada retornando um objeto de erro
const rejectedPromise = () => 
new Promise((resolve, reject) => {
  setTimeout(() => {
const randomNumber = generateRandomNumber();
reject(new Error(`O número ${randomNumber} é invalido`));
  },1000);
});
resolvedPromise().then((resolve) => {
  console.log(`resolvedPromise : o número gerado é ${response}.`);
})
.catch((error) => {
  console.log(`com a promise resolvida, não irá passar pelo catch`);
});

//retorno de quando é rejeitada
rejectedPromise().then((response) => {
  console.log(`Com a promise rejeitada, não irá passar pelo then`);
})
.catch((error) => {
  console.log(`rejectedPromise: ${error.message}`);
});