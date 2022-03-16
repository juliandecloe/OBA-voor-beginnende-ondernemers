import { renderstarterData } from "./renderData.js";

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'ondernemerschap';
const key = '1a719538729c214e276b93b4c94064c8';
const detail = 'Default';
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer 4289fec4e962a33118340c888699438d`
}

// Geen image
// "https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/172024889&token=c1322402"
// "https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/172024889&token=c1322402"

// "https://cover.biblion.nl/coverlist.dll?doctype=morebutton&bibliotheek=oba&style=0&ppn=28888714X&isbn=9789037109597&lid=&aut=&ti=&size=70"
// "https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/28888714X&token=c1322402"

// Wel image
// "https://cover.biblion.nl/coverlist.dll?doctype=morebutton&bibliotheek=oba&style=0&ppn=383466229&isbn=9789491653759&lid=&aut=&ti=&size=70"
// "https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/383466229&token=c1322402"


export function getstarterData() {
    
    fetch(url, config)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        const results = data.results;
        // results.forEach((item, i) => {
        //     let imageCheck = results.filter(element =>
        //         element.coverimages[1] === "https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/172024889&token=c1322402"
        //     );
        // });
        console.log(imageCheck)
        renderstarterData(data);
    })
    .catch(err => {
        console.log(err);
    });
}
