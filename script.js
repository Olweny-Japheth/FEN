document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /* -------------------------------------------------------------------------- */
    /*                               Initialization                               */
    /* -------------------------------------------------------------------------- */

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Initialize GLightbox
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
        });
    }

    // Initialize Swiper for Testimonials
    if (typeof Swiper !== 'undefined') {
        new Swiper('.testimonials-slider', {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                768: { slidesPerView: 2, spaceBetween: 30 },
                1200: { slidesPerView: 3, spaceBetween: 30 }
            }
        });
    }

    /* -------------------------------------------------------------------------- */
    /*                               Navbar Handling                              */
    /* -------------------------------------------------------------------------- */

    const navbar = document.querySelector('#mainNavbar');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load

    /* -------------------------------------------------------------------------- */
    /*                             Smooth Scrolling                               */
    /* -------------------------------------------------------------------------- */

    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }

                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });

    /* -------------------------------------------------------------------------- */
    /*                           Contact Form Handling                            */
    /* -------------------------------------------------------------------------- */

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for contacting Franal Economic Network. We have received your message and will get back to you shortly.');
                this.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    /* -------------------------------------------------------------------------- */
    /*                             Scroll To Top                                  */
    /* -------------------------------------------------------------------------- */

    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});