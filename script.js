
// Efeito de rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alterar cor do header ao rolar a página
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = "0.5rem 0";
        header.style.background = "#ffffff";
    } else {
        header.style.padding = "1rem 0";
    }
});

// Logica simples para menu mobile (Toggle)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    // Aqui você pode adicionar uma classe 'active' para mostrar o menu no CSS
    alert("Funcionalidade de menu mobile ativada!");
});
