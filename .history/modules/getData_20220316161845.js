import { renderData } from "./renderData.js";

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '1a719538729c214e276b93b4c94064c8';
let query = 'Ondernemerschap';
const detail = 'Default';
const config = {
  Authorization: `Bearer 4289fec4e962a33118340c888699438d`
}

export function getData() { 
    
    let url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
    fetch(url, config)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.dir(data)
        renderData(data);
    })
    .catch(err => {
        console.log(err);
    });
}