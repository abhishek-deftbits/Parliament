# Member of Parliament / Politician Web Portal Template

A modern, high-performance, bilingual web portal designed for Members of Parliament, elected representatives, and political leaders. Built with **Alpine.js**, modern Vanilla CSS, and a **fully modular component architecture**.

Inspired by [nishcalrai.com.np](https://nishcalrai.com.np/) and modern civic-tech standards.

---

## 📁 Project Structure

The project is structured as a clean, high-performance static multi-page web application:

```
Parliament/
├── index.html                  # Main Home Portal (Hero, Counters, Pledges, Speech Theater, Moving Gallery)
├── about.html                  # Presidential Editorial Biography & Political Journey
├── projects.html               # Constituency Development Dossier & Budget Tracker
├── media.html                  # Speeches, Video Archive & Photo Highlights
├── constituency.html           # Constituency Demographic, Geographic & Agricultural Profile
├── gunaso.html                 # Citizen Grievance Portal & Live Ticket Tracker
├── contact.html                # Secretariat Offices, Contact Directory & Appointments
├── css/
│   ├── style.css               # Civic design system tokens, typography, layouts, themes
│   └── components.css          # Modals, lightboxes, drawers, grievance widgets
├── js/
│   ├── data.js                 # Centralized structured profile & legislative data source
│   └── app.js                  # Alpine.js state management, search filters, modal handlers
├── images/                     # Official high-resolution portraits and photo assets
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
