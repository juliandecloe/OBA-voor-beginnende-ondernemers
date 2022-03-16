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
        data.filter(element => {			
            if(element.coverimages.src === "https://v112.nbc.bibliotheek.nl/thumbnail?uri=http://data.bibliotheek.nl/ggc/ppn/172024889&token=c1322402") {
                console.log('ik heb geen image')
                return true
            } else {
                console.log('ik wel')
                return false
            }
        })
        console.log(data)
        renderstarterData(data);
    })
    .catch(err => {
        console.log(err);
    });
}
