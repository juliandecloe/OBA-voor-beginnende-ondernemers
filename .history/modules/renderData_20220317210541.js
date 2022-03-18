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
        <div class="anchor"></div>
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
                    <li>Jaar:</li>
                    <li>Onderwerp:</li>
                  </ul>
                  <ul>
                    <li>${item.authors ? item.authors : 'Geen auteurs'}</li>
                    <li>${item.publisher ? item.publisher : 'Geen uitgever'}</li>
                    <li>${item.languages ? item.languages : 'Geen taal'}</li>
                    <li>${item.year ? item.year : 'Geen jaar'}</li>
                    <li>${item["subject-topical"] ? item["subject-topical"] : 'Geen onderwerp'}</li>
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