export function getDetailed(item) {
    const bgBody = document.querySelector('body > div, .detailed button');
    bgBody.classList.remove('hide');
    
    item.classList.add('detailed');
}