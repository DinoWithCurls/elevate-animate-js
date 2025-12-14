# ELEVATE Animation

A stunning, performant animation showcase built with pure HTML, CSS, and vanilla JavaScript. Features smooth, choreographed animations with dynamic SVG manipulation.

![ELEVATE Animation Demo](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎬 Choreographed Animations
- **Rotating Star Entrance**: Full star rotates 360° while growing from the left
- **Sequential Reveal**: Outline star reveals from left to right with clip-path animation
- **Dynamic SVG Fill**: Outline star fills with white color after reveal completes
- **Fade-in Text**: "ELEVATE" text fades in from below with smooth timing

### 🎨 Technical Highlights
- **Pure CSS Animations**: No external animation libraries required
- **Dynamic SVG Manipulation**: JavaScript-powered inline SVG injection for advanced fill animations
- **Optimized Performance**: Hardware-accelerated transforms and smooth 60fps animations
- **Responsive Design**: Centered layout that works across different screen sizes
- **Custom Typography**: Google Fonts integration (Montserrat) for premium aesthetics

### 🔧 Animation Techniques Used
1. **CSS Keyframe Animations**: `rotateAndGrow`, `revealLeftToRight`, `fadeInUp`
2. **Clip-path Animation**: Creates the left-to-right reveal effect
3. **SVG Animation**: Dynamic fill animation injected via JavaScript
4. **Animation Chaining**: Sequential animations triggered with precise timing
5. **Transform Animations**: Hardware-accelerated rotate, scale, and translate

## 📁 Project Structure

```
elevate-animate-js/
├── index.html           # Main HTML structure
├── styles.css           # All CSS animations and styling
├── script.js            # Dynamic SVG manipulation logic
├── star-full.svg        # Filled star graphic
├── star-outline-2.svg   # Outline star graphic
└── README.md            # This file
```

## 🚀 Usage

### Quick Start

1. **Clone or download** this repository
2. **Open** `index.html` in any modern web browser
3. **Watch** the animation sequence unfold!

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project
cd elevate-animate-js

# Open in browser (macOS)
open index.html

# Or simply double-click index.html
```

### No Build Process Required
This project uses pure HTML, CSS, and JavaScript - no compilation, bundling, or dependencies needed!

## 🎯 Animation Timeline

| Time | Animation | Element |
|------|-----------|---------|
| 0s - 2s | Rotate & Grow (360° rotation + scale) | Full Star |
| 0s - 1s | Reveal Left to Right (clip-path) | Outline Star |
| 1s - 2.5s | Fill with White (SVG fill animation) | Outline Star |
| 0s - 2s | Fade In Up (opacity + translateY) | ELEVATE Text |

## 🛠️ Customization

### Modify Animation Timing

Edit `styles.css` to adjust animation durations:

```css
.image-1-container {
    animation: rotateAndGrow 2s ease-in-out; /* Change 2s to your preferred duration */
}

.image-2-container {
    animation: revealLeftToRight 1s ease-out forwards; /* Adjust reveal speed */
}
```

### Change Colors

Update the fill color in `script.js`:

```javascript
fill: #FFFFFF;  // Change to any hex color
```

Or modify the background in `styles.css`:

```css
body {
    background-color: #000000; /* Change background color */
}
```

### Adjust Text

Modify the text content in `index.html`:

```html
<div class="elevate-container">
    ELEVATE  <!-- Change to your text -->
</div>
```

## 🎨 Design Philosophy

- **Minimalist Aesthetic**: Clean black background with white elements
- **Smooth Transitions**: All animations use easing functions for natural motion
- **Performance First**: CSS transforms and opacity changes for GPU acceleration
- **No Dependencies**: Zero external libraries for maximum performance and simplicity

## 🌟 Key Implementation Details

### Dynamic SVG Injection
The project uses a clever technique to animate SVG fill properties:

1. Fetches the SVG file content via JavaScript
2. Parses it into a DOM element
3. Injects CSS animation directly into the SVG
4. Replaces the `<img>` tag with inline SVG
5. Triggers the fill animation on the path element

This approach allows CSS animations to target SVG properties that wouldn't work with external SVG files.

### Animation Sequencing
Animations are carefully timed to create a cohesive visual story:
- The reveal animation completes before the fill begins
- JavaScript uses `setTimeout` to trigger SVG replacement at exactly 1000ms
- CSS animations use the `forwards` fill-mode to maintain final states

## 📱 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

**Note**: Requires a modern browser with support for CSS animations, clip-path, and ES6 JavaScript.

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! If you create something cool, share it!

---

**Built with ❤️ using pure web technologies**
