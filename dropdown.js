
document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener("click", function () {
            dropdownMenu.classList.toggle("hidden");
        });
    }
});

