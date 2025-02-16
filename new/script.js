const btnAnimasi = document.getElementById('btn-animasi');

btnAnimasi.addEventListener('click', () => {
    const section = document.querySelector('section');
    section.style.transform = 'scale(1.1)';
    section.style.transition = 'all 0.5s ease-in-out';

    setTimeout(() => {
        section.style.transform = 'scale(1)';
    }, 500);
});