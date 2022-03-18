/*** Fetching data -> refactor into module later ***/
import { getData } from "./modules/getData.js";
import { pageLoader, scrollTop } from "./modules/scroll.js";


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


// =================== SEARCH =================== //

window.addEventListener('hashchange', function() {
    if(window.location.hash == '') {
		history.replaceState("", "", location.pathname);
        query = '';
        getData();
	} else if(window.location.hash != '#random-book') {
        query = window.location.hash.slice(1);
        getData();
    }
})

const searchForm = document.querySelector('form');
let searchInput = document.querySelector('main > form input');

searchForm.addEventListener('submit', function(e) {
    window.location.hash = searchInput.value;
    e.preventDefault();
})


// =================== SCROLL =================== //

window.addEventListener('scroll', pageLoader);


// =================== LOAD MORE =================== //

const scrollBtn = document.querySelector('footer button');

scrollBtn.addEventListener('click', function() {
    scrollTop();
    scrollBtn.classList.add('to-top')
});