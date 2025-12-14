// Animation re-trigger functionality with debouncing
let isAnimating = false;
const ANIMATION_DURATION = 4000; // Total animation duration in ms (including fade-out)

function restartAnimation() {
    // Debounce: prevent re-trigger while animation is running
    if (isAnimating) {
        console.log('⏳ Animation already in progress. Please wait...');
        return;
    }
    
    isAnimating = true;
    const mainContainer = document.querySelector('.main-container');
    
    // Force reflow by cloning and replacing the container
    const clone = mainContainer.cloneNode(true);
    mainContainer.parentNode.replaceChild(clone, mainContainer);
    
    console.log('🎬 Animation restarted!');
    
    // Reset debounce flag after animation completes
    setTimeout(() => {
        isAnimating = false;
        console.log('✅ Animation complete. Ready to restart.');
    }, ANIMATION_DURATION);
}

// Make function globally accessible
window.restartAnimation = restartAnimation;

// Optional: Add keyboard shortcut (press 'R' to restart)
document.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        restartAnimation();
    }
});

console.log('Animation ready! Press "R" to restart or call restartAnimation() in console.');
