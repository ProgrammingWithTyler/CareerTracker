# 🎯 CareerTracker Web

**CareerTracker** is a modern, responsive job tracking and career management web application. Built with Angular 20 and PrimeNG 19, it helps users organize job applications, track interview stages, export reports, and stay motivated throughout the job hunt.

This is the **frontend** for the CareerTracker platform.

---

## 🚀 Tech Stack

- **Framework**: Angular 20 (standalone components)
- **UI**: PrimeNG + PrimeFlex + Aura Sky Theme
- **Routing**: Standalone route config (Angular 15+ style)
- **Component Design**: Widget-first architecture (per-page components and shared widgets)
- **Dark Mode**: Fully supported via `.dark-mode` class
- **A11y**: Accessible by default using PrimeNG's WAI-ARIA support

---

## 🖼️ Architecture

See [`docs/ArchitectureOverview.md`](./docs/ArchitectureOverview.md) and [`docs/UiUxStrategy.md`](./docs/UiUxStrategy.md) for technical breakdowns of routing, layout, component hierarchy, and design principles.

---

## 🛠 Development Setup

### 📦 Install dependencies

```bash
npm install
```

Then navigate to [http://locahost:4200](http://localhost:4200) in your browser.

The app reloads automatically with file changes.

---

## 📁 Folder Structure (Simplified)

```plaintext
src/
├── app/
│   ├── pages/            # Feature pages (dashboard, jobs, etc.)
│   ├── shared/           # Reusable UI widgets
│   ├── layout/           # Main layout shell
│   ├── core/             # Services, models, core logic
│   └── app.routes.ts     # Centralized routing configuration
├── assets/
├── styles/
└── index.html
```

--

## 🧪 Testing

### Unit Tests

```bash
ng test
```

### End-to-End (E2E) Tests

E2E setup is currently not included. You may integrate Cypress, Playwright, or WebdriverIO.

---

## 🧠 Component Scaffolding

To generate a new component:

```bash
ng generate component pages/jobs/components/job-list --standalone
```

Make sure to follow naming and folder conventions listed in `docs/ui-ux-strategy.md`.

---

## 🤝 Contributing

This project is currently maintained by a solo developer as part of a professional portfolio. Contributions may be opened up in the future.

## 📄 License

MIT – see LICENSE file for details.

## 📘 Resources

- Angular CLI Reference
- PrimeNG Components
- PrimeFlex Utilities
