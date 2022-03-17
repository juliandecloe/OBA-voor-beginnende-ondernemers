export function getDetailed(item) {
    const bgBody = document.querySelectorAll('body > div');
    bgBody.classList.remove('hide');
    
    item.classList.add('detailed');
}