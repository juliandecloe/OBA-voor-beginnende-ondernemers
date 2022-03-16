/*** Fetching data -> refactor into module later ***/
import { getData } from "./modules/getData.js";

getData();

window.addEventListener('hashchange', function() {
    query = window.location.hash;
    getData();
})

