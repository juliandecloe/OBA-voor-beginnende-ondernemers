export function getDetailed(item) {
    item.classList.add('detailed');
    const bgBody = document.querySelector('body > div, .detailed button');
    bgBody.classList.remove('hide');
}