const toggle = document.getElementById('dark-mode-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggle.textContent = 'Light Mode';
}
toggle.addEventListener('click', () => {
    const Dark = document.body.classList.toggle('dark-mode');

    toggle.textContent = Dark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', Dark ? 'dark' : 'light');
});