// export let removeBtn;

export function getDetailed(item) {
    item.classList.add('detailed');

    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element, i) => {
        element.classList.remove('hide');
    })
    
    let removeBtn = document.querySelector('.detailed button')
    removeBtn.addEventListener('click', function() {
        removeDetailed(item);
    });
}

export function removeDetailed(item) {
    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element, i) => {
        element.classList.add('hide');
    })
    item.classList.remove('detailed');
}