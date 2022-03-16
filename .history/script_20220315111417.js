/*** Fetching data -> refactor into module later ***/
const ul = document.querySelector('main > ul');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'ondernemerschap';
const key = '76f45dfa187d66be5fd6af05573eab04';
const secret = '1a719538729c214e276b93b4c94064c8';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};

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

// render data
function render(data) {
//   const results = data.results;
//   console.dir(results);
  results.forEach((item, i) => {
    ul.insertAdjacentHTML('beforeend', 
    `
    <li>
        <h3>${item.titles[0]}</h3>
        <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
        <img src="${
        item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
        }">
    </li>
    ` 
  });
}
