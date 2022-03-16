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

export function getData() { 
    fetch(url, config)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.dir(data)
        renderstarterData(data);
    })
    .catch(err => {
        console.log(err);
    });
}

export function getsearchData() {
    if(searchPage == 1) {
        removeliafterLoad()
    }
    searchLoader()
    fetch(searchAPI + window.location.hash.slice(1) + '&p=' + searchPage)
    .then(function(response) {
        return response.json();
    })
    .then(function(collection) {
        console.log(collection)
        searchResults(collection);
    })
}
