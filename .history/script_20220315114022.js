/*** Fetching data -> refactor into module later ***/
const ul = document.querySelector('main > ul');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'tolkien';
const key = '94b246d9246caa361b548deec6d3e32c';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
}

fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data)
    render(data);
  })
  .catch(err => {
    console.log(err);
  });

function render(data) {
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    ul.insertAdjacentHTML('beforeend', 
        `
        <li>
            <h2>${item.titles[0]}</h2>
            <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
            <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
        </li>
        ` 
    );
  });
}
