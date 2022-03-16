const ul = document.querySelector('main > ul');

export function renderstarterData(data) {
  // let imageCheck = data.results.filter(element =>
  //   element.coverimages[1].indexOf("token=c1322402")
  // );
  // console.log(imageCheck)
  data.results.forEach((item, i) => {
    ul.insertAdjacentHTML('beforeend', 
        `
        <li>
              <h3>${item.titles[0]}</h3>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${item.coverimages ? item.coverimages[1] : '' }">
        </li>
        ` 
    );
  });
}