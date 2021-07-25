const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// pull data from json and push into cities array
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

// find matching city or state
const findMatches = (wordToMatch, cities) => {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
};

// put commas to population
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// display input.value changes on dom
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);
    return `
    <li>
      <span class='name'>${cityName}, ${stateName}</span>
      <span class='population'>${numberWithCommas(place.population)}</span>
    </li> 
      `;
  }).join('');
  suggestions.innerHTML = html;
};

// input and list
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// run the displayMatches function with any change or keyup
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);