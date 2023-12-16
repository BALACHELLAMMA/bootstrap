const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = 
`
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
rel="stylesheet"
integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
crossorigin="anonymous">
<link rel="stylesheet" href="../style/footer.css" />

<footer class="bg-white">
<section class="top_footer container-md p-5">
    <div
        class="top_footer_content row d-flex justify-content-between">
        <section class="contact col-md-5 d-flex flex-column">
            <div class="logo_container mb-4 ">
                <img src="../img/logo.svg" alt="logo" />
            </div>
            <div
                class="sub_container d-flex align-items-start gap-2">
                <img src="../img/mail_icon.svg" alt="mail" />
                <p>hello@skillbridge.com</p>
            </div>
            <div
                class="sub_container d-flex align-items-start gap-2">
                <img src="../img/phone_icon.svg" alt="phone number" />
                <p>+91 91813 23 2309</p>
            </div>
            <div
                class="sub_container d-flex align-items-start gap-2">
                <img src="../img/location_icon.svg" alt="location" />
                <p>Somewhere in the world</p>
            </div>
        </section>
        <div
            class="links_container col-md-6  row d-flex justify-content-center">
            <!-- <div class="home_about col-md-6 row"> -->
                <div class="home col-md-3">
                    <h4>Home</h4>
                    <ul
                        class="list-unstyled d-flex flex-column gap-2">
                        <li><a class="text-decoration-none"
                                href="./home.html#benefits">Benefits</a></li>
                        <li><a class="text-decoration-none"
                                href="./home.html#our_courses">Our
                                Courses</a></li>
                        <li><a class="text-decoration-none"
                                href="./home.html#our_testimonials">Our
                                Testimonials</a></li>
                        <li><a class="text-decoration-none"
                                href="./home.html#our_faq">Our FAQ</a></li>
                    </ul>
                </div>
                <div class="about_us col-md-3">
                    <h4>About Us</h4>
                    <ul
                        class="list-unstyled d-flex flex-column gap-2">
                        <li><a class="text-decoration-none"
                                href="./about.html#">Company</a></li>
                        <li><a class="text-decoration-none"
                                href="./about.html#">Achievements</a></li>
                        <li><a class="text-decoration-none"
                                href="./about.html#">Our Goals</a></li>
                    </ul>
                </div>
            <!-- </div> -->
            <div class="social_profile col">
                <h4>Social Profiles</h4>
                <div class="social_profile_container">
                    <button class="border-0 rounded p-2 "><img
                            src="../img/fb_icon.svg" /></button>
                    <button class="border-0 rounded p-2 "><img
                            src="../img/twitter_logo.svg" /></button>
                    <button class="border-0 rounded p-2 "><img
                            src="../img/linkedin_icon.svg" /></button>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="bottom_footer border-top p-3">
    <p class="text-center">© 2023 Skillbridge. All rights reserved.</p>
</section>
</footer>
`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);