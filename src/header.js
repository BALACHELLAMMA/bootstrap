const header = ` 
<link rel="stylesheet" href="../style/header.css" />

<header>
<div class="container-fluid text-white p-2">
    <p class="font-weight-bold text-center m-2">Free Courses 🌟 Sale
        Ends Soon, Get It Now
        <img src="../img/stroke.svg" /></p>
</div>
<nav class="navbar   navbar-expand-lg  bg-body-tertiary ">
    <div class="container">
        <img class="navbar-brand" src="../img/Logo.svg"
            alt="Skill bridge" />

        <div class="offcanvas offcanvas-end" tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title"
                    id="offcanvasNavbarLabel">
                    <img class="navbar-brand" src="../img/Logo.svg"
                        alt="Skill bridge" />
                    Skill bridge</h5>
                <button type="button" class="btn-close"
                    data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul
                    class="navbar-nav justify-content-start flex-grow-3 pe-3">
                    <li class="nav-item">
                        <a class="nav-link active "
                            aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Courses</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="login_signup_toggle_container">
            <button type="button" class="sign_up_button btn">Sign up</button>
            <button type="button"
                class="login_button btn  text-white">Login</button>
            <button class="navbar-toggler border-0" type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation">
                <img src="../img/hamburger.svg" />
            </button>
        </div>
    </div>
</nav>
</header>`

document.addEventListener('DOMContentLoaded', (event) => {
    const footersection = document.querySelector('.header');
    footersection.insertAdjacentHTML('afterbegin', header);
});