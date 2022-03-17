
export function suggestBook() {
    let beforeArticle = document.querySelector('main > section article:nth-child(5)');
    const suggestArticle = document.querySelector('.suggest-book');
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