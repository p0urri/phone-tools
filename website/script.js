// Animation de typing dans le terminal
document.addEventListener('DOMContentLoaded', function() {
    const terminal = document.querySelector('.terminal');
    if (terminal) {
        // Effet de clignotement sur le prompt
        setInterval(() => {
            const prompts = document.querySelectorAll('.prompt');
            prompts.forEach(prompt => {
                prompt.style.opacity = prompt.style.opacity === '0.5' ? '1' : '0.5';
            });
        }, 500);
    }
    
    // Smooth scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});