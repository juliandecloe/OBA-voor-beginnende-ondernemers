
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
        window.location.hash = '#random-book';
        let articleArray = document.querySelectorAll('main > section article img');
        articleArray.forEach((item, i) => {
            if(item.id == 'random-book') {
                item.id = null;
            }
        });
    });
}

export function randomBook() {
    const random = Math.floor(Math.random() * articleArray.length);
    articleArray[random].id = 'random-book';
}