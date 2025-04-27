
# 🚀 Metflix UI Clone

> A **static**, **responsive** landing page clone of a popular streaming service’s UI — built purely for **educational** purposes.  
> _This project demonstrates advanced HTML, CSS and vanilla JavaScript techniques._  

---

## 📖 Table of Contents

- [🔍 Overview](#-overview)  
- [✨ Features](#-features)  
- [🛠️ Technologies & Techniques](#️-technologies--techniques)  
- [📂 Project Structure](#-project-structure)  
- [⚙️ Setup & Deployment](#️-setup--deployment)  
- [🧑‍💻 Developer Notes](#️-developer-notes)  
- [❗ Legal & Disclaimer](#-legal--disclaimer)  
- [📜 License](#-license)  

---

## 🔍 Overview

Metflix is a **static** HTML/CSS/JS clone of a well-known streaming platform landing page. It faithfully reproduces:

- A full-screen hero banner with overlay effects  
- A horizontal **carousel** of featured titles with custom arrows & scrollbar styling  
- A **responsive** “More reasons to join” feature grid  
- An **accordion FAQ** with smooth expand/collapse animations  

> **Note:** No backend, no user data collection. All content (images & text) is static and for demonstration only.

---

## ✨ Features

- 🎨 **Pixel-perfect UI**: Replicates the look & feel of a major streaming homepage  
- 🔄 **Carousel** with left/right arrows:  
  - Automatically hides arrows at scroll ends  
  - Smooth scroll behavior (`scroll-behavior: smooth`)  
  - Custom, modern thin scrollbar styling  
- 📐 **Responsive layout**:  
  - Grid → single-column fallback on small screens  
  - Fluid typography & spacing via media queries (1200px → 600px)  
- ❓ **FAQ Accordion**:  
  - Click to expand/collapse answers  
  - Plus/close icons toggle automatically  
  - CSS transitions for smooth height & padding animation  
- ⚙️ **Pure Vanilla JavaScript**:  
  - No frameworks or libraries  
  - Demonstrates DOM querying, event handling, class toggling  

---

## 🛠️ Technologies & Techniques

- **HTML5** semantic structure  
- **CSS3**:  
  - Flexbox & CSS Grid  
  - Custom properties for spacing & colors  
  - Advanced selectors (`:nth-child`, `[aria-label]`)  
  - Scrollbar customization (`::-webkit-scrollbar`, `scrollbar-width`)  
  - Smooth transitions & animations (cubic-bezier easing)  
- **JavaScript (ES6+)**:  
  - `Element.scrollBy()` with `behavior: "smooth"`  
  - `classList.toggle()`, `classList.add()/remove()`  
  - `window.addEventListener("load")` for initialization  
  - Modular functions (`updateArrows()`, `initFAQ()`)  

---

## 📂 Project Structure

```
Metflix-UI-Clone/
├── assets/
│   └── images/         # logos, grid icons, list thumbnails, arrows, etc.
├── index.html          # main landing page
├── style.css           # all styling & media queries
├── script.js           # carousel + accordion logic
└── README.md           # this documentation
```

---

## ⚙️ Setup & Deployment

1. **Clone this repo**  
   ```bash
   git clone https://github.com/YourUsername/metflix-ui-clone.git
   cd metflix-ui-clone
   ```

2. **Open locally**  
   - Simply open `index.html` in your browser  
   - Or use VS Code Live Server extension  

3. **Deploy via GitHub Pages**  
   - Push to a GitHub repo named `metflix-ui-clone`  
   - In **Settings** → **Pages**, set the branch to `master` (or `main`) and folder to `/`  
   - Your site will be live at `https://YourUsername.github.io/metflix-ui-clone/`

---

## 🧑‍💻 Developer Notes

- **Customizable**: You can easily swap out images or adjust the carousel scroll amount (`scrollAmount` in `script.js`).  
- **Accessibility**:  
  - `aria-label="Scroll left/right"` on buttons  
  - Semantic headings & `<nav>` for screen readers  
- **Performance**:  
  - No external dependencies → minimal bundle size  
  - CSS only overhead for animations & transitions  

Use this project as a template for:
- Building your own static marketing pages  
- Practicing responsive design & CSS Grid/Flex  
- Learning vanilla JS DOM manipulation  

---

## ❗ Legal & Disclaimer

> **DISCLAIMER:** This repository is **personal educational project only**.  
> - **Not affiliated** with any streaming service, brand, or company.  
> - **No user data** is collected, stored, or transmitted.  
> - All images & likenesses of shows/series are copyrighted material from third-party studios and are used here **solely** for demonstration.  
> - This project is **non-commercial** and for portfolio/display purposes.

Please do **not** use this code or content as a production site or for any commercial purpose.

---

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

Enjoy experimenting and learning! 🚀✨  
---

## 📫 Get in Touch

Got questions or feedback? Feel free to reach out!

- 📧 Email: [vedantroy3@gmail.com](mailto:vedantroy3@gmail.com)  
- 🔗 LinkedIn: [Vedant Roy](https://www.linkedin.com/in/vedant-roy-b58117227/)
