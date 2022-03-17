export function getDetailed(item) {
    item.classList.add('detailed');
    item.classList.add('detailed');
    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element, i) => {
        element.classList.remove('hide');
    })
}