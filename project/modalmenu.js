// Функция для открытия модального окна
function openModal(imageSrc, description) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    
    modalImage.src = imageSrc;
    modalDescription.textContent = description;
    modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('imageModal');
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