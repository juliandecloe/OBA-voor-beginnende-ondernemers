import { renderData } from "./renderData.js";
import { query } from "../script.js";
import { page } from "./scroll.js";
import { noResults } from "./states.js";

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '1a719538729c214e276b93b4c94064c8';
const detail = 'default';
const config = {
  Authorization: `Bearer 4289fec4e962a33118340c888699438d`
}

export function getData(scroll) { 
    let url = `${cors}${endpoint}${'Ondernemerschap+' + query}&page=${page}&authorization=${key}&detaillevel=${detail}&output=json`;
    fetch(url, config)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.dir(data)
        renderData(data, scroll);
    })
    .catch(err => {
        console.log(err)
        noResults();
    });
}