window.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const content = document.getElementById('main-content');

    popup.classList.add('show');
    content.classList.add('blur-background');

    setTimeout(() => {
        popup.classList.remove('show');
        content.classList.remove('blur-background');
    }, 3500);
});
