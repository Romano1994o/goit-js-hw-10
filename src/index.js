import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import { createMarkup, createCardInfo } from './js/breed-info';

const breedSelectEl = document.querySelector('.breed-select');
const loadingElement = document.querySelector('.loader');
const catInfoEl = document.querySelector('.cat-info');



fetchBreeds()
  .then(createMarkup)
  .catch(error => {
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
    console.log(error);
  });

  breedSelectEl.addEventListener('change', e => {
  
    loadingElement.style.opacity = '1';
    catInfoEl.innerHTML = '';
    catInfoEl.style.cssText = '';
  fetchCatByBreed(e.target.value)
    .then(createCardInfo)
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      console.log(error);
    });
});
