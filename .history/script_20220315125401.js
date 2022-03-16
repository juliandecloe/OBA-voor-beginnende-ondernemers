/*** Fetching data -> refactor into module later ***/
const ul = document.querySelector('main > ul');
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'ondernemerschap';
const key = '1a719538729c214e276b93b4c94064c8';
const detail = 'Default';
const url = `https://cors-anywhere.herokuapp.com/${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer 4289fec4e962a33118340c888699438d`
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
            <h3>${item.titles[0]}</h3>
            <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
            <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
        </li>
        ` 
    );
  });
}
