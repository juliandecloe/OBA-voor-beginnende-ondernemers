const ul = document.querySelector('main > ul');

export function renderstarterData(data) {
    const results = data.results;
    results.forEach((item, i) => {
      ul.insertAdjacentHTML('beforeend', 
          `
          <li>
                <h3>${item.titles[0]}</h3>
                <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
                <img src="${item.coverimages ? item.coverimages[1]}">
          </li>
          ` 
      );
    });
}