
export function suggestBook() {
    let beforeArticle = document.querySelector('main > section article:nth-child(5)');
    beforeArticle.insertAdjacentHTML('beforebegin', 
    `
    <article class="suggest-book">
        <h2>Weet je niet welke je moet kiezen?</h2>
        <p>Laat ons een willekeurig boek kiezen!</p>
        <button>Doe je ding</button>
    </article>
    `
    );
    const suggestBtn = document.querySelector('.suggest-book button');

    suggestBtn.addEventListener('click', function() {
        history.replaceState("", "", location.pathname);
        randomBook();
    });
}

export function randomBook() {
    let articleArray = document.querySelectorAll('main > section article');
    articleArray.forEach((item, i) => {
        if(item.id == 'random-book') {
            item.id = null;
        }
    });
    window.location.hash = '#random-book';
}