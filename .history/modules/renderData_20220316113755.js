const ul = document.querySelector('main > ul');

export function renderstarterData(data) {
    const results = data.results;
    results.forEach((item) => {
      ul.insertAdjacentHTML('beforeend', 
          `
          <li>
                <h3>${item.titles}</h3>
                <p>${item.summaries}</p>
                <img src="${item.coverimages}">
          </li>
          ` 
      );
    });
}