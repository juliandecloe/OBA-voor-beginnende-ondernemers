/*** Fetching data -> refactor into module later ***/
import { getData } from "./modules/getData.js";


if(window.location.hash.indexOf('#')) {
    export let query = window.location.hash.slice(1);
} else {
    export let query = 'Ondernemerschap';
}



// =================== START FUNCTIONS =================== //

getData();


// =================== SEARCH =================== //


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




