// Funcionalidades comunes para todas las páginas

// Menú responsive
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });
});

// Cambiar tema claro/oscuro
const themeToggle = document.createElement('div');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Mostrar fecha actual
const dateElement = document.createElement('div');
dateElement.className = 'current-date';
document.querySelector('footer').prepend(dateElement);

const updateDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = new Date().toLocaleDateString('es-ES', options);
};

updateDate();
setInterval(updateDate, 86400000); // Actualizar cada día