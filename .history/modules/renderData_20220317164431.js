import { suggestBook } from "./suggestions.js";
import { getDetailed } from "./detailed.js";

const section = document.querySelector('main > section');

export function renderData(data) {
  // let imageCheck = data.results.filter(element => element.year == '2005');
  // console.log(imageCheck)
  let articleEl = document.querySelectorAll('article');
  articleEl.forEach((item, i) => {
    item.remove();
  });
  data.results.forEach((item, i) => {
    section.insertAdjacentHTML('beforeend', 
        `
        <article class="results">
          <button class="hide">X</button>
              <h3>${item.titles[0]}</h3>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${item.coverimages ? item.coverimages[1] : '' }">
              <h4 class="hide">Details</h4>
                <div class="hide">
                  <ul>
                    <li>Auteur:</li>
                    <li>Uitgever:</li>
                    <li>Taal:</li>
                    <li>Editie:</li>
                    <li>Kenmerken:</li>
                    <li>Aantekening:</li>
                    <li>Onderwerp:</li>
                    <li>ISBN:</li>
                    <li>SISO:</li>
                  </ul>
                  <ul>
                    <li>${item.authors ? item.authors : 'Geen auteurs gevonden'} </li>
                    <li>${item.publisher ? item.publisher : 'Geen samenvatting'}</li>
                  </ul>
              </div>
        </article>
        ` 
    );
  });
  suggestBook();
  articleEl = document.querySelectorAll('.results');
  let articleCheck = 0;
  articleEl.forEach((result) => {
    result.addEventListener('click', function() { 
      if(articleCheck == 0) {
        getDetailed(result); 
        articleCheck = 1;
      } else {
        articleCheck = 0;
      }
    });
  });
}