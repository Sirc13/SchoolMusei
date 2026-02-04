// menu.js
// Инициализация правильной иконки при загрузке
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');

    // Создаем мобильную кнопку меню
    function createMobileMenuToggle() {
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.id = 'mobileMenuToggle';
        mobileToggle.title = 'Открыть меню';
        mobileToggle.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        document.body.appendChild(mobileToggle);

        // Обработчик для мобильной кнопки
        mobileToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const sidebar = document.getElementById('sidebar');
            const isCollapsed = sidebar.classList.contains('collapsed');

            if (isCollapsed) {
                // Если меню скрыто - открываем его
                sidebar.classList.remove('collapsed');
                mobileToggle.classList.add('active');
                mobileToggle.title = 'Закрыть меню';
            } else {
                // Если меню открыто - закрываем его
                sidebar.classList.add('collapsed');
                mobileToggle.classList.remove('active');
                mobileToggle.title = 'Открыть меню';
            }

            // Сохраняем состояние в localStorage
            localStorage.setItem('sidebarCollapsed', !isCollapsed);
        });

        return mobileToggle;
    }

    // Создаем мобильную кнопку если её нет
    if (!document.getElementById('mobileMenuToggle')) {
        createMobileMenuToggle();
    }

    // Создаем кнопку переключения меню в сайдбаре, если её нет
    if (!menuToggle) {
        createMenuToggle();
    }

    // Функция создания кнопки переключения меню в сайдбаре
    function createMenuToggle() {
        const sidebarHeader = sidebar.querySelector('h2');
        if (sidebarHeader) {
            const headerContainer = document.createElement('div');
            headerContainer.className = 'sidebar-header';

            const toggle = document.createElement('button');
            toggle.className = 'menu-toggle';
            toggle.id = 'menuToggle';
            toggle.title = 'Развернуть меню';
            toggle.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;

            // Всегда добавляем заголовок, но на мобильных скроем кнопку через CSS
            headerContainer.appendChild(sidebarHeader.cloneNode(true));
            headerContainer.appendChild(toggle);
            sidebar.insertBefore(headerContainer, sidebar.querySelector('ul'));
            sidebar.removeChild(sidebarHeader);

            // Добавляем обработчик для созданной кнопки
            toggle.addEventListener('click', toggleMenu);
            return toggle;
        }
    }

    // Функция переключения меню
    function toggleMenu(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('collapsed');

        const currentToggle = document.getElementById('menuToggle');
        const mobileToggle = document.getElementById('mobileMenuToggle');

        // Только для десктопа управляем кнопкой в сайдбаре
        if (currentToggle && window.innerWidth > 768) {
            currentToggle.classList.toggle('active');
            currentToggle.title = sidebar.classList.contains('collapsed') ? 'Развернуть меню' : 'Свернуть меню';
        }

        // Управляем мобильной кнопкой
        if (mobileToggle) {
            if (sidebar.classList.contains('collapsed')) {
                mobileToggle.classList.remove('active');
                mobileToggle.title = 'Открыть меню';
            } else {
                mobileToggle.classList.add('active');
                mobileToggle.title = 'Закрыть меню';
            }
        }

        // Сохраняем состояние в localStorage
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    }

    // Обработчик для кнопки меню
    const currentMenuToggle = document.getElementById('menuToggle');
    if (currentMenuToggle) {
        currentMenuToggle.addEventListener('click', toggleMenu);
    }

    // Восстанавливаем состояние меню из localStorage
    const savedState = localStorage.getItem('sidebarCollapsed');
    const isMobile = window.innerWidth <= 768;

    if (savedState === 'true') {
        // Меню свернуто
        sidebar.classList.add('collapsed');
        const mobileToggle = document.getElementById('mobileMenuToggle');

        if (mobileToggle) {
            mobileToggle.classList.remove('active');
            mobileToggle.title = 'Открыть меню';
        }

        // Для десктопа обновляем кнопку в сайдбаре
        if (!isMobile) {
            const currentToggle = document.getElementById('menuToggle');
            if (currentToggle) {
                currentToggle.classList.remove('active');
                currentToggle.title = 'Развернуть меню';
            }
        }
    } else {
        // Меню развернуто
        const mobileToggle = document.getElementById('mobileMenuToggle');

        if (mobileToggle) {
            mobileToggle.classList.add('active');
            mobileToggle.title = 'Закрыть меню';
        }

        // Для десктопа обновляем кнопку в сайдбаре
        if (!isMobile) {
            const currentToggle = document.getElementById('menuToggle');
            if (currentToggle) {
                currentToggle.classList.add('active');
                currentToggle.title = 'Свернуть меню';
            }
        }
    }

    // Скрываем кнопку меню в сайдбаре на мобильных устройствах при загрузке
    const menuToggleBtn = document.getElementById('menuToggle');
    if (menuToggleBtn && window.innerWidth <= 768) {
        menuToggleBtn.style.display = 'none';
    }

    // Добавляем обработчики для подменю
    const hasSubmenuItems = document.querySelectorAll('.has-submenu > a');
    hasSubmenuItems.forEach(item => {
        item.addEventListener('click', function (e) {
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

    // Закрытие меню при клике вне его области (для мобильных устройств)
    document.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('sidebar');
            const mobileToggle = document.getElementById('mobileMenuToggle');

            if (sidebar && !sidebar.contains(e.target) && mobileToggle && !mobileToggle.contains(e.target)) {
                if (!sidebar.classList.contains('collapsed')) {
                    toggleMenu();
                }
            }
        }
    });

    // Обработчик изменения размера окна
    window.addEventListener('resize', function () {
        const isNowMobile = window.innerWidth <= 768;
        const sidebar = document.getElementById('sidebar');
        const mobileToggle = document.getElementById('mobileMenuToggle');
        const menuToggle = document.getElementById('menuToggle');

        // Скрываем/показываем кнопку в сайдбаре в зависимости от размера экрана
        if (menuToggle) {
            if (isNowMobile) {
                menuToggle.style.display = 'none';
            } else {
                menuToggle.style.display = 'flex';
            }
        }

        if (isNowMobile) {
            // Переключились на мобильный вид
            // Кнопка в сайдбаре скрывается через CSS
            // Заголовок "Меню" остается видимым

            // Восстанавливаем состояние мобильного меню
            const savedState = localStorage.getItem('sidebarCollapsed');
            if (savedState === 'true') {
                sidebar.classList.add('collapsed');
                if (mobileToggle) {
                    mobileToggle.classList.remove('active');
                    mobileToggle.title = 'Открыть меню';
                }
            } else {
                sidebar.classList.remove('collapsed');
                if (mobileToggle) {
                    mobileToggle.classList.add('active');
                    mobileToggle.title = 'Закрыть меню';
                }
            }
        } else {
            // Переключились на десктопный вид
            // Кнопка в сайдбаре показывается через CSS

            // На десктопе всегда показываем меню развернутым
            if (sidebar && sidebar.classList.contains('collapsed')) {
                sidebar.classList.remove('collapsed');
            }

            if (mobileToggle) {
                mobileToggle.classList.add('active');
                mobileToggle.title = 'Закрыть меню';
            }

            // Обновляем кнопку в сайдбаре
            if (menuToggle) {
                menuToggle.classList.add('active');
                menuToggle.title = 'Свернуть меню';
            }
        }
    });
});