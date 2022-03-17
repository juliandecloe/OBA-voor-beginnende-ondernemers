import { suggestBook } from "./suggestions.js";

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
              <h3>${item.titles[0]}</h3>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${item.coverimages ? item.coverimages[1] : '' }">
              <div>
                <h4>Details</h4>
                <ul>
                  <li></li>
                </ul>
              </div>
        </article>
        ` 
    );
  });
  suggestBook();
}