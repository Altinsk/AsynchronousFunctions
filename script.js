'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountyInfo = function (country) {
  // Ajax calls HTTP request call function
  const request = new XMLHttpRequest();
  // open a request
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  // send the request
  request.send();
  // receive data once request is done
  request.addEventListener('load', function () {
    console.log(this);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const lang = Object.values(data.languages);
    const cur = Object.values(data.currencies);

    console.log(lang[0], cur[0].name);
    console.log(this.responseText);

    const html = `
                <article class="country">
                  <img class="country__img" src="${data.flags.png}"/>
                  <div class="country__data">
                    <h3 class="country__name">${data.name.common}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><span>👫</span>${Math.round(
                      +data.population / 1000000
                    ).toFixed(1)}M</p>
                    <p class="country__row"><span>🗣️</span>${lang}</p>
                    <p class="country__row"><span>💰</span>${cur[0].name}</p>
                  </div>
                </article>
                `;

    countriesContainer.insertAdjacentHTML('afterend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountyInfo('egypt');
getCountyInfo('usa');
getCountyInfo('united kingdom');
getCountyInfo('france');
getCountyInfo('russia');
