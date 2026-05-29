const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;

// Функция для смены слайда
function showSlide(index) {
    // Удаляем класс active у текущего слайда
    slides[currentIndex].classList.remove('active');
    
    // Высчитываем правильный индекс (чтобы слайдер шел по кругу)
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    
    // Добавляем класс active новому слайду
    slides[currentIndex].classList.add('active');
}

// Слушатели кликов на кнопки
nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Автоматическое переключение каждые 5 секунд (по желанию)
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);