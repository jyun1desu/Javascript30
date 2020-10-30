const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


const cityArray = []
fetch(endpoint)
fetch(endpoint).then(value => value.json())

fetch(endpoint).then(value => value.json()).then(data => cityArray.push(...data))

function findMatches(wordToMatch, cities) {
    const reg = new RegExp(wordToMatch, "gi");
    return cities.filter(place => place.city.match(reg) || place.state.match(reg));
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
    const matchArray = findMatches(this.value, cityArray);
    if (!matchArray.length) {
        const nonText = `<li>
        <span>Sorry there's is no "<span class="highlight">${this.value}</span>"</span>
        </li>`;
        suggestions.innerHTML = nonText;
    } else {
        const addHtml = matchArray.map(place => {
            const reg = new RegExp(this.value, "gi");
            const cityName = place.city.replace(reg, `<span class="highlight">${this.value}</span>`);
            const stateName = place.state.replace(reg, `<span class="highlight">${this.value}</span>`);
            return `<li>
        <span class="city_name">${cityName},${stateName}</span>
        <span class="city_population">${numberWithCommas(place.population)}</span>
        </li>`
        }).join('');
        suggestions.innerHTML = addHtml;
    };
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener("input", displayMatches);