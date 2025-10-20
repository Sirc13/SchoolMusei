// Функция для открытия модального окна
function openModal(imageSrc, title) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    

    
    // Предотвращаем прокрутку фоновой страницы
    document.body.style.overflow = 'hidden';
    modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('imageModal');
    
    // Восстанавливаем прокрутку фоновой страницы
    document.body.style.overflow = 'auto';
    modal.style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Обработка клавиши ESC для закрытия модального окна
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Предотвращаем прокрутку фона при прокрутке модального окна
document.addEventListener('wheel', function(event) {
    const modal = document.getElementById('imageModal');
    if (modal.style.display === 'block') {
        // Если модальное окно открыто, предотвращаем прокрутку фона
        if (!event.target.closest('.modal-text') && !event.target.closest('.modal-content')) {
            event.preventDefault();
        }
    }
}, { passive: false });