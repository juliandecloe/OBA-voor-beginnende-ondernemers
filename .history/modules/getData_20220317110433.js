import { renderData } from "./renderData.js";
import { query } from "../script.js";

const cors = 'https://cors-anywhere.herokuapp.com/';
const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const key = '1a719538729c214e276b93b4c94064c8';
const detail = 'default';
const config = {
  Authorization: `Bearer 4289fec4e962a33118340c888699438d`
}

export function getData() { 
    let url = `${cors}${endpoint}${'Ondernemerschap+' + query}&authorization=${key}&detaillevel=${detail}&output=json&subject3a%=“boek”`;
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