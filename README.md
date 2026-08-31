# Member of Parliament / Politician Web Portal Template

A modern, high-performance, bilingual web portal designed for Members of Parliament, elected representatives, and political leaders. Built with **Alpine.js**, modern Vanilla CSS, and a **fully modular component architecture**.

Inspired by [nishcalrai.com.np](https://nishcalrai.com.np/) and modern civic-tech standards.

---

## 🧩 Component Architecture

Every single section is isolated into its own independent, clean HTML component inside the `components/` directory:

```
Parliament/
├── index.html                  # Main layout orchestrating all components
├── components/
│   ├── topbar.html             # Parliament emblem, live date, news ticker & lang switcher
│   ├── navbar.html             # Sticky main navigation & mobile drawer
│   ├── hero.html               # Portrait, verified MP badge, quote & quick CTAs
│   ├── stats.html              # Key legislative impact & attendance counters
│   ├── services.html           # Quick action cards (Grievance, Tracker, Parliament)
│   ├── about.html              # Executive bio, philosophy & highlight pills
│   ├── journey.html            # Chronological milestone timeline
│   ├── priorities.html         # 6 Core strategic pillars & policy focus
│   ├── projects.html           # Constituency project & budget tracker with progress bars
│   ├── media.html              # Dedicated video speeches & TV debate archive
│   ├── gallery.html            # Dedicated photo gallery with categorized filters
│   ├── constituency.html       # Geography, specialty & demographic profile
│   ├── gunaso.html             # Public grievance portal with instant ticket generation & tracker
│   ├── contact.html            # Secretariat liaison offices & direct message form
│   ├── footer.html             # Institutional links, copyright & social handles
│   └── modals.html             # Video player lightbox, image lightbox, & appointment scheduler
├── css/
│   ├── style.css               # Civic design system tokens, typography, grid layouts, themes
│   └── components.css          # Modals, lightboxes, drawers, grievance widgets
├── js/
│   ├── data.js                 # Centralized structured data source
│   └── app.js                  # Alpine.js component loader (`x-component`) & reactive logic
└── README.md
```

---

## 🚀 How to Run Locally

Serve using Python or any lightweight static server:

```bash
# Using Python
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.
