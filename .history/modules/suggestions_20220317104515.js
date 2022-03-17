
export function suggestBook() {
    let beforeArticle = document.querySelector('main > section article:nth-child(5)');
    const suggestArticle = document.querySelector('.suggest-book');
    beforeArticle.insertAdjacentHTML('beforebegin', 
    `
    <article class="suggest-book">
        <h2>Weet je niet welke je moet kiezen?</h2>
        <p>Wij weten genoeg over boeken. Laat ons er een kiezen!</p>
        <button>Doe je ding</button>
    </article>
    `
    );
}