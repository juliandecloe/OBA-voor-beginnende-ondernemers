export function getDetailed(item) {
    const bgBody = document.querySelector('body > div,' + item + 'button');
    bgBody.classList.remove('hide');
    
    item.classList.add('detailed');
}