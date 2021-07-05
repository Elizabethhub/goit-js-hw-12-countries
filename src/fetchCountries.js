import { fetchCountries } from './service/api-service.js';
import countryInfo from './tpl/country.handlebars';

console.log(countryInfo);

const input = document.querySelector('[name="country"]');
const result = document.querySelector('.result');

input.addEventListener('input', searchCountries);

function searchCountries(e) {
  const searchWord = e.target.value.trim();
  console.log(searchWord);
  if (!searchWord) {
    return;
  }

  fetchCountries(searchWord).then(renderCountries).catch(console.log);
}

function renderCountries(countries) {
  if (countries.length === 1) {
    result.insertAdjacentHTML('afterbegin', countryInfo(countries));

    // вывести подр информацию о стране с пом шабл hbs
  } else if (countries.length > 1 && countries.length <= 10) {
    const counrtyList = results.map(country => {
      return `<li><p>${country}</p></li>`;
    });
    result.insertAdjacentHTML('beforeend', counrtyList.join(''));
  } else if (countries.length > 10) {
    // error

    console.log(countries);
  }
}
