# Skip Page – React + Vite

This project provides a modern, accessible, and user-friendly skip selection experience, built with React and Vite.

## Features

- ⚡️ Fast development with Vite and HMR
- ✨ Modern React component structure
- 🧹 ESLint integration for code quality
- 🎨 Carefully crafted UX & UI for accessibility and usability

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

---

## UX & UI Improvements

### 1. Color & Contrast
- Introduced accent gradients and secondary colors for highlights (e.g., blue-to-teal borders and buttons).
- Ensured all text and icons have WCAG-compliant contrast for accessibility.
- Used subtle background patterns/textures for card backgrounds.

### 2. Badges & Highlights
- Used pill-shaped badges for skip size and status (e.g., "Recommended").
- Added animated checkmark and colored border glow when a card is selected.
- Implemented animated tooltips for info icons.

### 3. Image Presentation
- Added a soft border and shadow around skip images.
- Implemented a skeleton loader for images while loading, with a smooth fade-in effect.
- (Ready for future) Gallery/carousel support for multiple images per skip.

### 4. Layout & Responsiveness
- Switched to a responsive grid layout for cards on desktop, with single-column on mobile.
- Added card grouping and filtering by skip size (Small, Medium, Large).
- Ensured all touch targets (buttons, cards) are large and well-spaced for mobile usability.

### 5. Personalization
- Displayed a “Recommended” badge for popular skips (based on API data).
- Allowed users to favorite skips with a heart icon, visually indicating favorites.
- (Ready for future) Compare feature support.

### 6. Favorite Icon Placement & Behavior
- Placed the favorite (heart) icon over the image, to the left of the skip size badge, for clarity and aesthetics.
- Made the icon smaller and adjusted its position for a balanced look.
- Clicking the card or the select button toggles selection (select/deselect).

---

These improvements provide a modern, accessible, and user-friendly experience for skip selection, with clear visual feedback, easy filtering, and mobile-first design.


