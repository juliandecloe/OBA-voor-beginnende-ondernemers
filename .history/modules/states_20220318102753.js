export function firstLoader() {
    document.body.classList.remove('overflow');
}

export function noResults() {
    console.log('remove elements')
    let firstSec = document.querySelector('section:first-child');
    firstSec.remove();
  
    const tryAgain = document.querySelector('section:last-child article')
    tryAgain.classList.remove('hide');
}