
export function suggestBook() {
    const articleWrap = document.querySelector('main > section');
    let beforeArticle = document.querySelector('main > section article:nth-child(5)');
    const suggestArticle = document.querySelector('.suggest-book');
    articleWrap.insertAdjacentHTML('beforeend', 
    `
    <article class="suggest-book">
        <h2>Weet je niet welke je moet kiezen?</h2>
        <p>Laat ons er een kiezen!</p>
        <button>Doe je ding</button>
    </article>
    `
    );

    beforeArticle.insertBefore(suggestArticle);
}