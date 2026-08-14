document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');
    const loginError = document.getElementById('login-error');
    const userNameSpan = document.getElementById('user-name-span');

    // Manejo de inicio de sesión
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const usuarioInput = document.getElementById('usuario').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        const usuarioValido = (usuarioInput === 'trabinfo1234@gmail.com' || usuarioInput === 'admin');
        const passwordValido = (passwordInput === 'trab1234' || passwordInput === '1234');

        if (usuarioValido && passwordValido) {
            loginScreen.style.display = 'none';
            mainContent.style.display = 'block';
            userNameSpan.textContent = usuarioInput;
            loginError.style.display = 'none';
        } else {
            loginError.style.display = 'block';
        }
    });

    // Eventos para abrir o cerrar overlays (Carrito e Historial)
    const btnToggleCart = document.getElementById('btn-toggle-cart');
    const btnToggleHistory = document.getElementById('btn-toggle-history');

    if (btnToggleCart) {
        btnToggleCart.addEventListener('click', toggleCart);
    }

    if (btnToggleHistory) {
        btnToggleHistory.addEventListener('click', toggleHistory);
    }
});

// Funciones globales para control de la interfaz
function toggleCart() {
    const cartOverlay = document.querySelector('.cart-overlay');
    if (cartOverlay) {
        cartOverlay.classList.toggle('active');
    }
}

function toggleHistory() {
    const historyOverlay = document.querySelector('.history-overlay');
    if (historyOverlay) {
        historyOverlay.classList.toggle('active');
    }
}