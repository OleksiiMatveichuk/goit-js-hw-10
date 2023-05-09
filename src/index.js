import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');

const inputCountries = evt => {
  const country = evt.target.value.trim();
  if (!country) {
    return;
  }
  fetchCountries(country)
    .then(nameFilter)
    .catch(() =>
      Notiflix.Notify.failure('Oops, there is no country with that name')
    );
};

function nameFilter(arr) {
  if (arr.length > 10) {
    list.innerHTML = '';
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }
  if (arr.length <= 10 && arr.length > 1) {
    const result = arr.reduce(
      (acc, el) =>
        acc +
        `<li>
        <img src="${el.flags.svg}" width ="40">
        <p>${el.name.official}</p>
    </li>`,
      ''
    );
    return (list.innerHTML = result);
  }
  if (arr.length === 1) {
    const result = arr.reduce(
      (acc, el) =>
        acc +
        `<li>
        <img src="${el.flags.svg}" width ="320">
        <h2>${el.name.official}</h2>
        <h3>Capital: ${el.capital}</h3>
        <h3>Population: ${el.population}</h3>
        <h3>Languages: ${Object.values(el.languages)}</h3>
    </li>`,
      ''
    );
    return (list.innerHTML = result);
  }
}

input.addEventListener('input', debounce(inputCountries, DEBOUNCE_DELAY));
