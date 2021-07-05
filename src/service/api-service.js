const TYPICODE_BASE_URL = 'https://restcountries.eu';

function fetchCountries(name) {
  return fetch(`${TYPICODE_BASE_URL}/rest/v2/name/${name}`).then(response => response.json());
}

export { fetchCountries };
