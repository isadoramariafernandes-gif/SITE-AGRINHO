
// Efeito de transparência no Navbar ao rolar a página
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = '#ffffff';
    } else {
        navbar.style.padding = '20px 0';
    }
});

// Manipulação do Formulário
const form = document.getElementById('agroForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de envio
    const btn = document.querySelector('.btn-submit');
    const originalText = btn.innerText;
    
    btn.innerText = "Enviando...";
    btn.style.background = "#d4a373";
    btn.disabled = true;

    setTimeout(() => {
        alert('Obrigado! Sua mensagem foi enviada. Juntos pelo agro sustentável.');
        btn.innerText = originalText;
        btn.style.background = "#8bc34a";
        btn.disabled = false;
        form.reset();
    }, 2000);
});

// Scroll Suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
