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

function detectMobile() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        alert("Warning: This site is best viewed on a desktop.");
    }
}

function scrollToMain() {
    const mainSection = document.querySelector('main');
    mainSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', detectMobile);