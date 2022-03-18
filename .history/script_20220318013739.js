/*** Fetching data -> refactor into module later ***/
import { getData } from "./modules/getData.js";
import { renderData } from "./modules/renderData.js";
import { isInViewport } from "./modules/inviewport.js";

export let query;
export let page = 1;
export let checker;

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


// =================== LOAD MORE =================== //

window.addEventListener('scroll', function() {
    console.log(checker)
    let scroll = 1;
    let lastArticle = document.querySelectorAll('.results');
    if(isInViewport(lastArticle[lastArticle.length - 5])) {
        if(!checker) {
            checker = true;
            // console.log(checker)
            page = page + 1;
            getData(scroll, checker)
        }
    }
});

