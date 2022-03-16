const ul = document.querySelector('main > ul');

export function renderstarterData(data) {
    const results = data.results;
    console.dir(results);
    results.forEach((item, i) => {
      ul.insertAdjacentHTML('beforeend', 
          `
          <li>
              <h3>${item.titles[0]}</h3>
              <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
              <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
          </li>
          ` 
      );
    });

    data.filter(element => {			
        if(element.coverimages.src === "https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/172024889&token=c1322402") {
            console.log('ik heb geen image')
            return true
        } else {
            console.log('ik wel')
            return false
        }
    })
}