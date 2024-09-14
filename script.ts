document.addEventListener('DOMContentLoaded', () => {
    const experienceContent = document.getElementById('experience-content');
    const toggleButton = document.getElementById('toggle-experience') as HTMLButtonElement;

    if (experienceContent && toggleButton) {
        toggleButton.addEventListener('click', () => {
            if (experienceContent.classList.contains('hidden')) {
                experienceContent.classList.remove('hidden');
                toggleButton.textContent = 'Hide Experience';
                toggleButton.style.backgroundColor = '#e63946'; // Red color for visibility
                toggleButton.style.color = '#fff';
            } else {
                experienceContent.classList.add('hidden');
                toggleButton.textContent = 'Show Experience';
                toggleButton.style.backgroundColor = '#004d99'; // Original color
                toggleButton.style.color = '#fff';
            }
        });
    } 
});
