const toggleBtn = document.getElementById('theme-toggle');

// Проверяем, сохранил ли пользователь тему ранее
const currentTheme = localStorage.getItem('theme');

// Если тема была сохранена, применяем её
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleBtn.textContent = '🌙 Темная';
}

// Отслеживаем клик по кнопке
toggleBtn.addEventListener('click', () => {
    // Получаем текущую тему
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        // Переключаем на темную
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '';
    } else {
        // Переключаем на светлую
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '';
    }
});

// Логика для модального окна QR-кода
const qrTrigger = document.getElementById('qr-trigger');
const qrModal = document.getElementById('qr-modal');

// Открываем окно при клике на маленький QR-код
qrTrigger.addEventListener('click', () => {
    qrModal.classList.add('show');
    // Блокируем прокрутку страницы под окном
    document.body.style.overflow = 'hidden'; 
});

// Закрываем окно при клике в любое свободное место (на темный фон)
qrModal.addEventListener('click', (event) => {
    // Закрываем только если кликнули на сам фон, а не на саму картинку
    if (event.target === qrModal) {
        qrModal.classList.remove('show');
        // Возвращаем прокрутку страницы
        document.body.style.overflow = ''; 
    }
});