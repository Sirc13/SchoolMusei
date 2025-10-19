const toggleBtn = document.getElementById("toggleBtn");
const mediaQuery = window.matchMedia('(max-width: 600px)');
function handleMediaQueryChange(e) {
    if (e.matches) {
        toggleBtn.style.display = 'block';
        sidebar.classList.toggle('collapsed');
    }else {
        toggleBtn.style.display = 'none';
        sidebar.classList.toggle('collapsed');
    }
}
handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaQueryChange);

document.addEventListener('DOMContentLoaded', function() {
    if (!sidebar.classList.contains('collapsed')) {
        sidebar.classList.toggle('collapsed');
        sidebar.classList.toggle('collapsed');
        toggleBtn.classList.toggle('collapsed');
        toggleBtn.innerHTML = '☰';
    }

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

toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    toggleBtn.classList.toggle('collapsed');

    // Меняем иконку кнопки
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.innerHTML = '☰';
    } else {
        toggleBtn.innerHTML = '×';
    }
});
