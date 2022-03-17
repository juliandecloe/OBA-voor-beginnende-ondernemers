
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
}

export function randomBook() {
    let articleArray = document.querySelectorAll('main > section article');

    const random = Math.floor(Math.random() * articleArray.length);

    articleArray[random].id = 'random-book';
    window.location.hash = 'random-book';
}