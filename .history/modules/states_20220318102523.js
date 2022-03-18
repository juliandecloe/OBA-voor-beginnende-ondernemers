export function firstLoader() {
    document.body.classList.remove('overflow');
}

export function noResults() {
    let articleEl = document.querySelectorAll('section:first-child article');
    articleEl.forEach((item) => {
      item.remove();
    });
  
    const tryAgain = document.querySelector('section:last-child article')
    tryAgain.classList.remove('hide');
}