document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    navbarLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.backgroundColor = 'gray';
            link.style.color = 'white';
        });

        link.addEventListener('mouseout', function() {
            link.style.backgroundColor = '';
            link.style.color = '';
        });
    });
});
