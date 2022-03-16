const section = document.querySelector('main > section');

export function renderData(data) {
  let imageCheck = data.results.filter(element =>
    element.coverimages[1].indexOf("token=c1322402")
  );
  console.log(imageCheck)
  imageCheck.forEach((item, i) => {
    section.insertAdjacentHTML('beforeend', 
        `
        <article>
              <h3>${item.titles[0]}</h3>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${item.coverimages ? item.coverimages[1] : '' }">
        </article>
        ` 
    );
  });
}