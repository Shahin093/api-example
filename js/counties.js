const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();
const displayCountries = (coutries) => {
    const countryDiv = document.getElementById('countries');
    coutries.forEach(country => {
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        div.classList.add('design');
        h4.innerText = country.name;
        div.appendChild(h4);
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countryDiv.appendChild(div);
    });
}