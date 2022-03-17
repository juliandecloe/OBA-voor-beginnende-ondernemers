export function getDetailed(item) {
    const divAppearance = document.querySelectorAll('div, ' + item + 'button');
    divAppearance.forEach((div, i) => {
        div.classList.remove('hide');
    });
    
    item.classList.add('detailed');
}