// ultra-simple-anime.js - супер простая версия
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Анимация заголовков
    anime({
        targets: 'h1, h2',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutExpo'
    });
    
    // 2. Анимация карточек
    anime({
        targets: '.achievement-card, .timeline-item',
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutExpo',
        delay: anime.stagger(100)
    });
    
    // 3. Анимация кнопок при наведении
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            anime({
                targets: btn,
                scale: 1.05,
                duration: 200
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            anime({
                targets: btn,
                scale: 1,
                duration: 200
            });
        });
    });
    
    // 4. Анимация активной ссылки меню
    const activeLink = document.querySelector('.nav__link.active');
    if (activeLink) {
        anime({
            targets: activeLink,
            color: '#4a8eff',
            duration: 1000,
            direction: 'alternate',
            loop: true
        });
    }
});