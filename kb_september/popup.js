window.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
});


//window.addEventListener('DOMContentLoaded', () => {
//    const popup = document.getElementById('popup');
//    const closeBtn = document.getElementById('closePopup');
//
//    // Show the popup every time the page loads
//    popup.classList.add('show');
//
//    closeBtn.addEventListener('click', () => {
//        popup.classList.remove('show');
//    });
//});
