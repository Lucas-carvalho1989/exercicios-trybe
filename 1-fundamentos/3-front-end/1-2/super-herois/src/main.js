import Swal from 'sweetalert2';

const button = document.querySelectorAll('.gerador-de-id');
const img = document.querySelectorAll('.imagem');
// Essa é a URL base da API.
const BASE_URL = 'https://akabab.github.io/superhero-api/api';

// A API possui 731 heroínas e heróis cadastrados. Porém, para
// simularmos um erro na API por não encontrar o id informado,
// vamos colocar que a quantidade máxima de ids é superior ao
// correto.
const MAX_HEROES = 1000;

// Função simples para retornar um valor inteiro aleatório
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

// Adicionamos o eventListener 'click' no nosso botão
button.addEventListener('click', (event) => {
  // event.preventDefault() para evitar que ele recarregue
  // a página
  event.preventDefault();

  const id = randomId();

  // Faremos o fetch utilizando nossa URL e o id gerado
  // pela função
  fetch(`${BASE_URL}/id/${id}.json`)
  // Após o fetch, devemos extrair o objeto com a função .json()
    .then((result) => result.json())
    .then((data) => {
      // Uma vez extraído, vamos recuperar as informações
      // que precisamos. No caso, a imagem e o nome
      img.src = data.images.md;
      name.innerHTML = data.name;
    })
    // Caso haja erro, nós tratamos o mesmo com o .catch()
    .catch((error) => Swal.fire({
      // Aqui, estamos usando a nossa biblioteca, mas
      // você pode usar a função window.alert() também
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
