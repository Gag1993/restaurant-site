// Анимация меню
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-3px)';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = '';
    });
});

// Модальное окно
function showModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            ${content}
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.close-btn').onclick = () => {
        modal.remove();
    };
}