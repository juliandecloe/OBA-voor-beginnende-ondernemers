const ul = document.querySelector('main > ul');

export function renderstarterData(data) {
    const results = data.results;
    results.forEach((item, i) => {
      ul.insertAdjacentHTML('beforeend', 
          `
          <li>
                <h3>${item.titles[0]}</h3>
                <p>${item.summaries[i]}</p>
                <img src="${item.coverimages[i]]}">
          </li>
          ` 
      );
    });
}
