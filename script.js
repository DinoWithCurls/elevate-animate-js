// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const starOutline = document.getElementById('star-outline');
    
    // After revealLeftToRight completes (1s), fetch and modify the SVG
    setTimeout(() => {
        fetch('star-outline-2.svg')
            .then(response => response.text())
            .then(svgContent => {
                // Parse the SVG content
                const parser = new DOMParser();
                const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
                const svgElement = svgDoc.querySelector('svg');
                
                // Add an ID to the stroke path for animation
                const paths = svgElement.querySelectorAll('path');
                paths.forEach((path, index) => {
                    path.setAttribute('id', `path-${index}`);
                });
                
                // Add CSS animation to the SVG
                const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
                style.textContent = `
                    @keyframes fillWhite {
                        0% {
                            fill: transparent;
                            fill-opacity: 0;
                        }
                        100% {
                            fill: #FFFFFF;
                            fill-opacity: 1;
                        }
                    }
                    #path-1 {
                        animation: fillWhite 1.5s ease-out forwards;
                    }
                `;
                svgElement.insertBefore(style, svgElement.firstChild);
                
                // Replace the img with the inline SVG
                const container = starOutline.parentElement;
                svgElement.setAttribute('height', '160px');
                svgElement.setAttribute('width', '220px');
                container.replaceChild(svgElement, starOutline);
            })
            .catch(error => console.error('Error loading SVG:', error));
    }, 1000); // Wait for revealLeftToRight to complete
});
