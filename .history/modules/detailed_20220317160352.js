export function getDetailed(item) {
    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element, i) => {
        element.classList.remove('hide');
    })

    item.classList.add('detailed');
}