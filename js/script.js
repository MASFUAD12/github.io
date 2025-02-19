const toggleButton = document.getElementById('toggleDarkMode');
const ModelIcon = document.getElementById('modelIcon');
const htmlElement = document.documentElement;

toggleButton.addEventListener('click',() => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-bs-theme', newTheme);
    if (newTheme === 'dark') {
        ModelIcon.className = 'bi bi-brightness-high'      
    } else
        ModelIcon.className = 'bi bi-brightness-high-fill'      
        
})