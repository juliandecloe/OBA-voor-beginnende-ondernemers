export function triggerDetailed() {
    articleEl = document.querySelectorAll('.results');
    let articleCheck = 0;
    articleEl.forEach((result) => {
        result.addEventListener('click', function() { 
        if(articleCheck == 0) {
            getDetailed(result); 
            articleCheck = 1;
        } else {
            articleCheck = 0;
        }
        });
    });
}


export function getDetailed(result) {
    result.classList.add('detailed');

    const appearance = document.querySelectorAll('body > div, .detailed button, .detailed h4');
    appearance.forEach((element) => {
        element.classList.remove('hide');
    })

    let removeBtn = document.querySelector('.detailed button')
    removeBtn.addEventListener('click', function() {
        removeDetailed(result);
    });
}

function removeDetailed(result) {
    const appearance = document.querySelectorAll('body > div, .detailed button, .detailed h4');
    appearance.forEach((element) => {
        element.classList.add('hide');
    });
    result.classList.remove('detailed');
}