import './style.css';
const buttonCat = document.getElementById('Get-random-cat');
const buttonDog = document.getElementById('Get-random-dog');
const buttonSurprise = document.getElementById('Surprise-me');
const URL_API_DOG = 'https://dog.ceo/api/breeds/image/random'
const URL_API_CAT = 'https://api.thecatapi.com/v1/images/search'

buttonCat.addEventListener('click', () => {
  fetch(URL_API_CAT).then((response) => response.json())
  .then(([data]) => {
    img.src = data.url
  })
});
buttonDog.addEventListener('click', () => {
  fetch(URL_API_DOG).then((response) => response.json())
  .then((data) => {
    img.src = data.message;
  })
});
buttonSurprise.addEventListener('click', () => {
  Promise.any ([
    fetch(URL_API_CAT),
    fetch(URL_API_DOG),
  ]).then((response) => response.json())
  .then((data) => {
    const petUrl = data.message || data[0].url;
    img.src = petUrl;
  });
});