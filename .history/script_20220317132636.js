/*** Fetching data -> refactor into module later ***/
import { getData } from "./modules/getData.js";
import { randomBook } from "./modules/suggestions.js";

export let query;

if(window.location.hash) {
    query = window.location.hash.slice(1);
} else {
    query = '';
}

// =================== START FUNCTIONS =================== //

if(window.location.hash == '#random-book') {
    history.replaceState("", "", location.pathname);
    query = '';
}

getData();

console.log('page load')


// =================== SEARCH =================== //

window.addEventListener('hashchange', function() {
    if(window.location.hash == '') {
		history.replaceState("", "", location.pathname);
        query = '';
	} else if(window.location.hash != '#random-book') {
        query = window.location.hash.slice(1);
    }
    // getData();
})

const searchForm = document.querySelector('form');
let searchInput = document.querySelector('main > form input');

searchForm.addEventListener('submit', function(e) {
    window.location.hash = searchInput.value;
    e.preventDefault();
})




