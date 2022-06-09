window.addEventListener('scroll', (event) => {
    event.preventDefault();
    navbarScroll();
});

function navbarScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("bg-dark", "navbar-solid");
    } else {
        navbar.classList.remove("bg-dark", "navbar-solid");
    }
}