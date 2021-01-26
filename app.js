const sections = document.querySelectorAll('section');
const burger = document.querySelector('.burger');
const gradients = [
    "background: linear-gradient(to right top, #f46b45, #eea849)",
    "background: linear-gradient(to right top, #005c97, #363795)",
    "background: linear-gradient(to right top, #e53935, #e35d5b)",
    "background: linear-gradient(to right top, #8bf445, #99cf1b)"
];


const options = {
    threshold: 0.7
}
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute(`data-index`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting) {
            burger.style.setProperty('left', `${directions.left}px`);
            burger.style.setProperty('top', `${directions.top}px`);
            burger.style.setProperty('width', `${directions.width}px`);
            burger.style.setProperty('height', `${directions.height}px`);
            burger.style.background = gradients[gradientIndex];
        }

    });
}

sections.forEach(section => {
    observer.observe(section);
})