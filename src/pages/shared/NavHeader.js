import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            event.preventDefault();
            navbarScroll();
        });
    });

    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-md navbar-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand p-0 m-0" to="/">
                        <img src='/assets/images/EnakaEnterprisesLight.png' alt="" width="50" height="50" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarLinksCollapsable">
                        <div className="navbar-nav">
                            <Link className="nav-link nav-item active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link nav-item" to="/market">Market</Link>
                            <Link className="nav-link nav-item" to="/marketPaginated">MarketPaginated</Link>
                            <Link className="nav-link nav-item" to="/app">App</Link>
                            <Link className="nav-link nav-item" to="/bootstrap">Bootstrap</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
};

function navbarScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 550 ||
        document.documentElement.scrollTop >= 550
    ) {
        navbar.classList.add("bg-dark", "navbar-solid");
    } else {
        navbar.classList.remove("bg-dark", "navbar-solid");
    }
}

export default NavHeader;