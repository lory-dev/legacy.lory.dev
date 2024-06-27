window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        footer.style.display = 'block';
    } else {
        header.classList.remove('scrolled');
        footer.style.display = 'none';
    }
});

function scrollToSection(section) {
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
}
