/*** Fetching data -> refactor into module later ***/
import { getData } from "./modules/getData.js";

getData();

window.addEventListener('hashchange', function() {
    query = window.location.hash;
    getData();
})

const searchForm = document.querySelector('form');
let searchInput = document.querySelector('main > form input');

searchForm.addEventListener('submit', function() {
    window.location.hash = searchInput;
})


