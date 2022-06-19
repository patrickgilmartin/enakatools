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
                <div className="container-fluid">
                    <Link className="navbar-brand p-0 m-0" to="/">
                        <img src='/assets/images/EnakaEnterprisesLight.png' alt="" width="50" height="50" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarLinksCollapsable">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/market">Market</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/app">App</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bootstrap">Bootstrap</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                            <button id="eve_sso" className="btn">
                                <img src="/assets/images/eve-sso-login-black-small.png" alt="Eve Sign On" />
                            </button>
                        </ul>
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