import { getData } from "./getData.js";

const scrollBtn = document.querySelector('body > button');

export let page = 1;

export function pageLoader() {
    let scroll = 1;
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
        page = page + 1;
        getData(scroll)
    }
    showScrollTop();
}

export function scrollTop() {
    scrollBtn.classList.add('to-top')
    window.scrollTo(0, 0);
    setTimeout(function() { scrollBtn.classList.remove('to-top') }, 2000);
    
}

function showScrollTop() {
    if (page >= 2) {
        scrollBtn.classList.add('show');
    } else if(window.scrollY==0) {
        console.log('top')
        scrollBtn.classList.remove('show');
    }
    
}

