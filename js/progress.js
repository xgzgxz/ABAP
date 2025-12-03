// This script dynamically updates a progress bar at the top of the page
// to show the user's scroll progress.

document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    if (!progressBar) {
        return;
    }

    function updateProgressBar() {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        progressBar.style.width = `${progress}%`;
    }

    window.addEventListener('scroll', updateProgressBar);
    updateProgressBar(); // Initial call
});
