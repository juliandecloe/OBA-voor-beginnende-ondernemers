export function getDetailed(item) {
    const bgBody = document.querySelector('body > div');
    bgBody.classList.remove('hide');
    
    item.classList.add('detailed');
}