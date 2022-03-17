export function getDetailed() {
    const divAppearance = document.querySelectorAll('div');
    let articleEl = document.querySelectorAll('article');

    divAppearance.forEach((item, i) {
        item.classList.remove('hide');
    });

    articleEl.forEach((item, i) => {
        item.classList.add('detailed');
    });
}