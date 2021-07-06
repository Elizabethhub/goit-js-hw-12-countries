import { fetchCountries } from './service/api-service.js';
import countryInfo from './tpl/country.hbs';
import debounce from 'lodash.debounce';
import { alert, notice, info, success, error, defaultModules } from '@pnotify/core';

console.log(countryInfo);

const inputRef = document.querySelector('[name="country"]');
const result = document.querySelector('.result');

inputRef.addEventListener('input', debounce(searchCountries, 500));

function searchCountries(e) {
  const searchWord = e.target.value.trim();
  result.innerHTML = '';
  console.log(searchWord);
  if (!searchWord) {
    return;
  }

  fetchCountries(searchWord).then(renderCountries).catch(console.log);
}

function renderCountries(countries) {
  if (countries.length === 1) {
    result.innerHTML = countryInfo(countries);
  } else if (countries.length > 1 && countries.length <= 10) {
    const countryList = countries
      .map(country => {
        return `<p>${country.name}</p>`;
      })
      .join('');
    result.innerHTML = countryList;
  } else if (countries.length > 10) {
    error({
      text: 'Данные отсутствуют или неверный формат ввода!',
    });

    console.log(countries);
  }
}
