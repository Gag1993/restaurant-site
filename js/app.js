// Мобильное меню
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Параллакс-эффект для hero-секции
const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });
}

// Фильтрация меню
const filterBtns = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

if (filterBtns.length && menuItems.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Анимация кнопки
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);

            // Фильтрация
            const category = this.dataset.category;
            menuItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Добавление в корзину
const addToCartBtns = document.querySelectorAll('.add-to-cart');
if (addToCartBtns.length) {
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const itemName = this.closest('.menu-item').querySelector('h3').textContent;
            const itemPrice = this.closest('.menu-item').querySelector('.item-price').textContent;
            
            // Анимация
            this.textContent = '✓ Добавлено';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = 'В корзину';
                this.style.backgroundColor = '';
            }, 2000);
            
            console.log(`Добавлено: ${itemName} (${itemPrice})`);
            // Здесь можно добавить логику для реальной корзины
        });
    });
}

// Плавное появление страницы
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// Адаптивность меню
function handleResize() {
    if (window.innerWidth > 768 && navLinks) {
        navLinks.style.display = 'flex';
    }
}

window.addEventListener('resize', handleResize);
handleResize();