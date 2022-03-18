export function firstLoader() {
    document.body.classList.remove('overflow');
}

export function noResults() {
    // let articleEl = document.querySelectorAll('section:first-of-type article');
    // articleEl.forEach((item) => {
    //   item.remove();
    // });
  
    const tryAgain = document.querySelector('section:last-of-type')
    tryAgain.classList.remove('hide');
}