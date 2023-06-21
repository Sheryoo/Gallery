let container = document.querySelector('.container')
let back = document.getElementById("back")
let next = document.getElementById("next")

container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft -= e.deltaY;
    container.style.scrollBehavior = "auto";

});
next.addEventListener('click', () => {
    container.style.scrollBehavior = "smooth";
    container.scrollLeft += 900;
});
back.addEventListener('click', () => {
    container.style.scrollBehavior = "smooth";
    container.scrollLeft -= 900;
})
