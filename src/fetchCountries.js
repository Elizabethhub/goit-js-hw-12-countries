import { fetchCountries } from './service/api-service.js';
import countryInfo from './tpl/country.hbs';

console.log(countryInfo);

const inputRef = document.querySelector('[name="country"]');
const result = document.querySelector('.result');

inputRef.addEventListener('input', _.debounce(searchCountries, 500));

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
  } else if (countries.length > 1 && countries.length <= 10) {
    const counrtyList = results.map(country => {
      return `<li><p>${country}</p></li>`;
    });
    result.insertAdjacentHTML('beforeend', counrtyList.join(''));
  } else if (countries.length > 10) {
    error({
      text: 'Notice me, senpai!',
    });

    console.log(countries);
  }
}
