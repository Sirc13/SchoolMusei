// Инициализация правильной иконки при загрузке
document.addEventListener('DOMContentLoaded', function() {

    // Добавляем обработчики для подменю
    const hasSubmenuItems = document.querySelectorAll('.has-submenu > a');
    hasSubmenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Проверяем, был ли клик по самому элементу или его потомкам
            if (e.target === this || this.contains(e.target)) {
                e.preventDefault();
                const parentLi = this.parentElement;
                const submenu = parentLi.querySelector('.submenu');

                // Закрываем все другие открытые подменю на этом уровне
                const siblings = Array.from(parentLi.parentElement.children).filter(li => li !== parentLi);
                siblings.forEach(sibling => {
                    if (sibling.classList.contains('has-submenu')) {
                        sibling.classList.remove('active');
                        const siblingSubmenu = sibling.querySelector('.submenu');
                        if (siblingSubmenu) siblingSubmenu.style.display = 'none';
                    }
                });

                // Переключаем текущее подменю
                parentLi.classList.toggle('active');
                submenu.style.display = parentLi.classList.contains('active') ? 'block' : 'none';
            }
        });
    });
});
