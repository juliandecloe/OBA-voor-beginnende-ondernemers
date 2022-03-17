
export function getDetailed(result) {
    result.classList.add('detailed');

    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element, i) => {
        element.classList.remove('hide');
    })

    let removeBtn = document.querySelector('.detailed button')
    removeBtn.addEventListener('click', function() {
        console.log(result)
        removeDetailed(result);
    });
}

function removeDetailed(result) {
    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element, i) => {
        element.classList.add('hide');
    })
    result.classList.remove('detailed');
}