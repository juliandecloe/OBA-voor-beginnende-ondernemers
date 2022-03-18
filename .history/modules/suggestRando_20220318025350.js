import { page } from "../script.js";


export function suggestBook() {
    let beforeArticle;
    if(page % 2 == 0) {
        if (page > 2) {
            let suggestEl = document.querySelector('.suggest-book');
            suggestEl.remove();
            document.body.insertAdjacentHTML('beforeend',
            `
            <footer><button></button></footer>
            `
            );
        }   
        beforeArticle = document.querySelectorAll('main > section article'); 
    
        beforeArticle[beforeArticle.length-4].insertAdjacentHTML('beforebegin', 
        ` <article class="suggest-book">
            <h2>Weet je niet welke je moet kiezen?</h2>
            <p>Laat ons een willekeurig boek kiezen!</p>
            <button>Doe je ding</button>
        </article>`
        );

        const suggestBtn = document.querySelector('.suggest-book button');

        suggestBtn.addEventListener('click', function() {
            randomBook()
        });
    }
}

export function randomBook() {
    history.replaceState("", "", location.pathname);
    let articleArray = document.querySelectorAll('.results');
    articleArray.forEach((item, i) => {
        if(item.id == 'random-book') {
            item.id = null;
        }
    });

    const random = Math.floor(Math.random() * articleArray.length);
    articleArray[random].id = 'random-book';
    window.location.hash = '#random-book';
}