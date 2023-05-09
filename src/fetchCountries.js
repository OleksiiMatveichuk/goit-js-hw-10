const URL = 'https://restcountries.com/v3.1/';
const FILTER = '?fields=name,flags,capital,languages,population';

export const fetchCountries = country => {
  return fetch(`${URL}name/${country}${FILTER}`).then(res => {
    if (!res.ok) {
      return Promise.reject(res.json());
    }
    return res.json();
  });
};
