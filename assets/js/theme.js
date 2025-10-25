// Theme Toggle Functionality
const themeToggleButton = document.getElementById('theme-toggle-button');
const body = document.body;

// Check for saved theme preference in localStorage
const currentTheme = localStorage.getItem('theme');

// Apply saved theme on page load
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeToggleButton.textContent = '🌙';
} else {
    // Default is dark mode
    themeToggleButton.textContent = '☀️';
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Update icon and save preference
    if (body.classList.contains('light-mode')) {
        themeToggleButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        themeToggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});
