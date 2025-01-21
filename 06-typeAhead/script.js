const URL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];

async function fetchData() {
    try{
  const response = await fetch(URL);
  const data = await response.json();
  cities.push(...data);
  return cities;
    }
  catch(error) {
    console.error('Error: ',error);
    }
}
async function aaa(params) {
  const cities = await fetchData();
  const search = this.value;

    function findMatches(wordToMatch, cities) {
      return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
      });
    }
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
function displayMatches(search, cities) {
  const result = findMatches(search, cities);
  const html = result.map(place => {
    const regex = new RegExp(search, 'gi');
    const cityName= place.city.replace(regex, `<span class="hl">${search}</span>`); 
    const state = place.state.replace(regex, `<span>${search}</span>`)
    return`
    <li>
    <span class="name">${cityName}, ${state} </span>
    <span class="population">${numberWithCommas(place.population)} </span>
    </li>
    `

  }).join('');
  suggestions.innerHTML = html;
  

}
displayMatches(search, cities);
  }
const searchInput = document.querySelector('.form_input');
const suggestions = document.querySelector('.form__suggestions');
searchInput.addEventListener('keyup', aaa);




// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);

