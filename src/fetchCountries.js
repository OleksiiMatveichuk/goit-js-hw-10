const URL = 'https://restcountries.com/v3.1/';
const FILTER = '?fields=name,flags,capital,languages,population';

export const fetchCountries = clb => {
  return fetch(`${URL}all${FILTER}`)
    .then(res => res.json())
    .then(arr => clb(arr));
};
