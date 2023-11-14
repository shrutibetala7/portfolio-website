document.addEventListener('DOMContentLoaded', function () {
    // Check if the user has a preference for dark mode
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set initial mode based on user preference or default to light mode
    const initialMode = localStorage.getItem('darkMode') || (prefersDarkMode ? 'dark' : 'light');

    // Set the initial mode on the body
    document.body.classList.add(initialMode + '-mode');

    // Function to toggle between dark and light mode
    function toggleDarkMode() {
        const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newMode = currentMode === 'dark' ? 'light' : 'dark';

        // Toggle the class on the body
        document.body.classList.replace(currentMode + '-mode', newMode + '-mode');

        // Save the mode preference to local storage
        localStorage.setItem('darkMode', newMode);

        // Update the lightbulb icon
        updateLightbulbIcon(newMode);
    }

    // Dark mode toggle button
    const darkModeToggleBtn = document.getElementById('darkModeToggle');

    // Attach click event listener to the dark mode toggle button
    if (darkModeToggleBtn) {
        darkModeToggleBtn.addEventListener('click', toggleDarkMode);
    }


    function updateLightbulbIcon(mode) {
        const lightbulbIcon = darkModeToggleBtn.querySelector('i');

        if (mode === 'dark') {
            lightbulbIcon.classList.remove('fa-sun-o');
            lightbulbIcon.classList.add('fa-moon-o');
        } else {
            lightbulbIcon.classList.remove('fa-moon-o');
            lightbulbIcon.classList.add('fa-sun-o');
        }
    }


    // Update the lightbulb icon initially
    updateLightbulbIcon(initialMode);
});
