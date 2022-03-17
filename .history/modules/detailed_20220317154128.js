export function getDetailed() {
    const divAppearance = document.querySelectorAll('div');

    divAppearance.forEach((item, i) {
        item.classList.remove('hide');
    });
}