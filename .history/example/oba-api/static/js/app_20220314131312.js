/*** Fetching data -> refactor into module later ***/
const main = document.querySelector('main');
const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'tolkien';
const key = '9a9b148ab8abe117aa908';
const secret = '1a3b58ea286b7117a29af';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`,
};

fetch(url, config)

  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data);
    localStorage.setItem('data', JSON.stringify(data));
  })
  .catch(err => {
    console.log(err);
    if(localStorage.getItem('data')){
      render(JSON.parse(localStorage.getItem('data')));
    }
  });

// render data
function render(data) {
  const results = data.results;
  console.dir(results);
  results.forEach((item, i) => {
    const html = `
            <article>
              <h2>${item.titles[0]}</h2>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${
                item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
              }">
            </article>
          `;
    main.insertAdjacentHTML('beforeend', html);
  });
}
