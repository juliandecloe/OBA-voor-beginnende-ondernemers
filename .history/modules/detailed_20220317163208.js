
export function getDetailed(result) {
    result.classList.add('detailed');

    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element) => {
        element.classList.remove('hide');
    })

    let removeBtn = document.querySelector('.detailed button')
    removeBtn.addEventListener('click', function() {
        console.log(result)
        removeDetailed(result);
    });
}

function removeDetailed(result) {
    console.log('remove')
    const appearance = document.querySelectorAll('body > div, .detailed button');
    appearance.forEach((element) => {
        element.classList.add('hide');
    });
    result.classList.remove('detailed');
}