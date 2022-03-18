import { suggestBook } from "./suggestRando.js";
import { triggerDetailed } from "./detailed.js";
import { checkerFunc } from "../script.js";

const section = document.querySelector('main > section');

export function renderData(data, scroll, checker) {
  let articleEl = document.querySelectorAll('.results');
  if(!scroll) {
    articleEl.forEach((item) => {
      item.remove();
    });
  }
  data.results.forEach((item) => {
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
                    <li><p>Auteur:</p><p>${item.authors ? item.authors : 'Geen auteurs'}</p></li>
                    <li><p>Uitgever:</p><p>${item.publisher ? item.publisher : 'Geen uitgever'}</p></li>
                    <li><p>Taal:</p><p>${item.languages ? item.languages : 'Geen taal'}</p></li>
                    <li><p>Jaar:</p><p>${item.year ? item.year : 'Geen jaar'}</p></li>
                    <li><p>Onderwerp:</p><p>${item["subject-topical"] ? item["subject-topical"] : 'Geen onderwerp'}</p></li>
                  </ul>
              </div>
        </article>
        ` 
    );
  });
  suggestBook();
  triggerDetailed();
  checkerFunc()
}