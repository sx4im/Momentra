<div align="center">

# ✨ Momentra ✨

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)
![Status](https://img.shields.io/badge/status-active-success.svg?style=flat-square)

**A stunning, minimalist photo gallery experience crafted with pure HTML, CSS & JavaScript**

![Gallery Preview](/api/placeholder/800/400)

[View Demo](https://example.com) • [Report Bug](https://example.com) • [Request Feature](https://example.com)

</div>

---

## ✧ Overview

Momentra transforms your photography collection into an immersive visual journey. With thoughtful animations, intuitive navigation, and a clean aesthetic, your images take center stage in this elegant, responsive gallery.

<div align="center">

![Responsive](/api/placeholder/200/100) ![Animation](/api/placeholder/200/100) ![Performance](/api/placeholder/200/100)

</div>

## ✧ Features

- **Elegant Masonry Layout** — Dynamic grid adjusts perfectly to any screen size
- **Silky-Smooth Transitions** — Refined animations enhance the viewing experience
- **Immersive Lightbox** — Focus on one image with a sophisticated full-screen view
- **Intelligent Image Loading** — Optimized performance with lazy loading and preloading
- **Intuitive Filtering** — Organize your collection with a beautiful tagging system
- **Keyboard & Touch Navigation** — Seamless browsing across all devices
- **Customizable Themes** — Light/dark modes and accent color options
- **Minimal Footprint** — No external libraries or dependencies required

## ✧ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/momentra.git

# Navigate to project folder
cd momentra

# That's it! Open index.html in your browser
```

No build process or dependencies required. Pure vanilla code ready to use.

## ✧ Usage

### Basic Implementation

```html
<div class="momentra-gallery">
  <div class="gallery-item" data-category="nature">
    <img 
      src="images/sunset.jpg" 
      alt="Sunset over mountains"
      data-title="Golden Hour"
      data-description="The magical moment when daylight turns to twilight"
    >
  </div>
  <!-- Add more gallery items -->
</div>

<!-- Include the scripts -->
<script src="js/momentra.js"></script>
<script>
  // Initialize the gallery
  new Momentra({
    selector: '.momentra-gallery',
    theme: 'light',
    columns: 'auto'
  });
</script>
```

### Advanced Configuration

Create a deeply customized experience with the comprehensive configuration options:

```javascript
new Momentra({
  // Core settings
  selector: '.momentra-gallery',
  theme: 'auto',                // 'light', 'dark', or 'auto'
  accentColor: '#6d56c1',       // Primary accent color
  
  // Layout options
  columns: 'auto',              // Number of columns or 'auto'
  margin: 8,                    // Space between items (px)
  
  // Behavior
  animationSpeed: 300,          // Transition duration (ms)
  preloadImages: true,          // Preload adjacent images
  shuffleOnLoad: false,         // Randomize order on init
  
  // Lightbox settings
  enableLightbox: true,         // Enable lightbox feature
  lightboxAnimationStyle: 'fade', // 'fade', 'zoom', or 'slide'
  showImageInfo: true,          // Show title and description
  enableFullscreen: true,       // Allow fullscreen mode
  
  // Navigation
  enableKeyboardNav: true,      // Allow keyboard navigation
  enableGestures: true,         // Enable touch gestures
  
  // Filtering
  enableFiltering: true,        // Enable category filtering
  showFilterButtons: true,      // Display filter buttons
  defaultFilter: 'all'          // Initial active filter
});
```

## ✧ Customization

Momentra provides elegant styling that adapts to your brand through CSS variables:

```css
:root {
  /* Color palette */
  --momentra-bg: #ffffff;
  --momentra-text: #2c2c2c;
  --momentra-accent: #6d56c1;
  --momentra-surface: #f3f3f3;
  --momentra-shadow: rgba(0, 0, 0, 0.1);
  
  /* Typography */
  --momentra-font-primary: 'Poppins', sans-serif;
  --momentra-font-secondary: 'Playfair Display', serif;
  
  /* Animation */
  --momentra-transition-speed: 300ms;
  --momentra-ease: cubic-bezier(0.19, 1, 0.22, 1);
  
  /* Layout */
  --momentra-radius: 8px;
  --momentra-spacing: 24px;
}

/* Dark theme overrides */
[data-theme="dark"] {
  --momentra-bg: #121212;
  --momentra-text: #ffffff;
  --momentra-surface: #1e1e1e;
  --momentra-shadow: rgba(0, 0, 0, 0.3);
}
```

## ✧ Browser Support

| <img src="/api/placeholder/30/30" alt="Chrome"> | <img src="/api/placeholder/30/30" alt="Firefox"> | <img src="/api/placeholder/30/30" alt="Safari"> | <img src="/api/placeholder/30/30" alt="Edge"> | <img src="/api/placeholder/30/30" alt="Opera"> |
|:-----------------------------------------------:|:------------------------------------------------:|:-----------------------------------------------:|:--------------------------------------------:|:---------------------------------------------:|
|                  Latest ✓                       |                   Latest ✓                        |                  Latest ✓                       |                 Latest ✓                     |                  Latest ✓                     |

## ✧ Contributing

We welcome contributions that enhance Momentra! Here's how you can help:

1. **Fork** the repository
2. **Create** your feature branch: `git checkout -b feature/amazing-addition`
3. **Commit** your changes: `git commit -m 'Add some amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-addition`
5. Submit a **Pull Request**

## ✧ License

Distributed under the MIT License. See `LICENSE` for more information.

## ✧ Acknowledgements

- [Font Awesome](https://fontawesome.com) — Icons used in UI elements
- [Unsplash](https://unsplash.com) — Demo images in the examples
- [Google Fonts](https://fonts.google.com) — Typography

---

<div align="center">

Made with ❤️ by [Your Name]

</div>
