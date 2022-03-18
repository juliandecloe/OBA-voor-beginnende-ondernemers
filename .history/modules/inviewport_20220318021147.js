export function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0
}