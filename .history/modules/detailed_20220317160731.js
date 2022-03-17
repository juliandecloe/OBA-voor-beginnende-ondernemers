export function getDetailed(item) {
    item.classList.add('detailed');

    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element, i) => {
        element.classList.remove('hide');
    })
}

export function removeDetailed(item) {
    item.classList.remove('detailed');

    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element, i) => {
        element.classList.add('hide');
    })
}