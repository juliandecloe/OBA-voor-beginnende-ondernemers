export function firstLoader() {
    document.body.classList.remove('overflow');
}

export function noResults() {
    const tryAgain = document.querySelector('section:last-child article')
    tryAgain.classList.remove('hide');
}