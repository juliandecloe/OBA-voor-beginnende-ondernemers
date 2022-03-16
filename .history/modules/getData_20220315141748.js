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

export function getstarterData() {
    
    fetch(url, config)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let imageCheck = data.results.filter(element =>
            element.coverimages[0] === "https://cover.biblion.nl/coverlist.dll?doctype=morebutton&bibliotheek=oba&style=0&ppn=172024889&isbn=9789065876966&lid=&aut=&ti=&size=70"
        );
        console.dir(data)
        // renderstarterData(data);
    })
    .catch(err => {
        console.log(err);
    });
}
