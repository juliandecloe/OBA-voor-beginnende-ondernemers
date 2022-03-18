export function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.bottom > 100px
    );
}