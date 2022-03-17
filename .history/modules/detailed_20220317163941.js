
export function getDetailed(result) {
    result.classList.add('detailed');

    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element) => {
        element.classList.remove('hide');
    })

    let removeBtn = document.querySelector('.detailed button')
    removeBtn.addEventListener('click', function() {
        removeDetailed(result);
    });
}

function removeDetailed(result) {
    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element) => {
        element.classList.add('hide');
    });
    result.classList.remove('detailed');
}