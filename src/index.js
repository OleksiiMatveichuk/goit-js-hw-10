import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const infoBlock = document.querySelector('.country-info');

// const inputCountries = evt => {
//   const result = fetchCountries()
//     .then(res => res.json())
//     .then(console.log);
//   console.log('result :>> ', result);
// };

const addItem = arr => {
  console.log('arr :>> ', arr);
  arr.map(el => console.log('el :>> ', el));
};

fetchCountries(addItem);
input.addEventListener('input', debounce(inputCountries, DEBOUNCE_DELAY));

// *
// *
// *
// *

// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов

// Notiflix.Notify.init('hello');
// success/failure/warning/info;
