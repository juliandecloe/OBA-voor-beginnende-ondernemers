import { getData } from "./getData.js";

const scrollBtn = document.querySelector('footer button');

export let page = 1;

export function pageLoader() {
    let scroll = 1;
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
        page = page + 1;
        getData(scroll)
    }
}

export function scrollTop() {
    if (page > 2) {
        scrollBtn.classList.add('show');
    }
    scrollBtn.classList.add('to-top')
    window.scrollTo(0, 0);
    setTimeout(function() { scrollBtn.classList.remove('to-top') }, 2000);
    
}

