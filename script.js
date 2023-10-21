function createCountries(countries) {
    countries.forEach((country) => {
        document.body.innerHTML += `<div class=" country_container">
    <h1 class="country_name"> ${country.name.common}</h1>
    <img class="country_img" src= ${country.flags.png} alt="country_flag">
    <p><span>Capital :</span> ${country.capital}</p>
    <p><span>Region :</span> ${country.region}</p>
    <p><span>Country Code :</span> ${country.cioc}</p>       
    <button type="button" class="country_button">Click for Weather</button>
    </div>`
    })
}
fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json())
    .then((countr) => createCountries(countr))



