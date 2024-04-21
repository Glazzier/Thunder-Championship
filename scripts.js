document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("nav ul li");

    listItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("animation");
        }, 200 * index);
    });
});