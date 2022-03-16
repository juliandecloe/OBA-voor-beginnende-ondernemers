/*** Fetching data -> refactor into module later ***/
import { getData } from "./modules/getData.js";

export let query = 'Ondernemerschap';

getData();

window.addEventListener('hashchange', function() {
    if(window.location.hash == '') {
		history.replaceState("", "", location.pathname)
	} else {
        query = window.location.hash.slice(1);
    }
    getData();
})

const searchForm = document.querySelector('form');
let searchInput = document.querySelector('main > form input');

searchForm.addEventListener('submit', function(e) {
    window.location.hash = searchInput.value;
    e.preventDefault();
})


