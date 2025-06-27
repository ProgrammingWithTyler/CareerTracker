# 📘 UI/UX Strategy for CareerTracker

## 🎯 Purpose

This document outlines the complete UI/UX strategy for the CareerTracker application. It provides a structured blueprint for pages, components, layout behavior, styling conventions, and responsive design goals.

---

## 📄 Application Pages

### Core Pages (Routing Targets)

| Page Name | Path       | Description                                         |
| --------- | ---------- | --------------------------------------------------- |
| Dashboard | /dashboard | Main overview with widgets, KPIs, and quick actions |
| Jobs      | /jobs      | Job tracking board, statuses, deadlines, notes      |
| Reports   | /reports   | Charts, metrics, export/download views              |
| Profile   | /profile   | User details, avatar, theme preferences             |
| Settings  | /settings  | App-level configs: theme, data source, backups      |
| Login     | /login     | Entry point with auth (planned for future phase)    |
| NotFound  | \*\*       | Fallback 404 view for unknown routes                |

---

## 📊 Layout Strategy

### Root Shell: `MainLayoutComponent`

* Top `<p-menubar>` for desktop
* `<p-sidebar>` or `<p-panelMenu>` for mobile navigation
* Dynamic layout using PrimeFlex (grid/flex)
* `<router-outlet>` placed inside layout shell

Optional: consider `BlankLayout` for login/404 later.

---

## 🧱 UI Widget Components

Each widget will live in `src/app/shared/widgets/` and be lazy-loadable in the dashboard or elsewhere.

| Component Name            | Description                               |
| ------------------------- | ----------------------------------------- |
| **JobSummaryCard**        | Shows # jobs applied, interviews, offers  |
| **RecentActivityList**    | Displays recent job activities (add/edit) |
| **DeadlineTrackerWidget** | List of upcoming deadlines                |
| MotivationQuote           | Rotating quote or tip (optional)          |
| **DataExportCard**        | Export resume/job data (PDF/CSV)          |
| **ThemeToggleSwitch**     | For light/dark mode toggle                |

---

## 🎨 Design Rules

### Theme

* PrimeNG Aura-based theme
* Sky blue as the primary tone (via Aura Sky preset)
* Dark mode supported with `.dark-mode` selector

### Layout

* Use PrimeFlex grid system for spacing and responsiveness
* Use `p-card`, `p-panel`, and other PrimeNG containers
* Use consistent padding/margins (`1rem` / `2rem` spacing)

### Iconography

* Use PrimeIcons (`pi pi-*`) consistently
* Navigation icons: Home, Briefcase, Chart, Cog, User

### Responsiveness

* Mobile: Hamburger + sidebar menu
* Tablet: Condensed nav, collapsible widgets
* Desktop: Full menubar, wide layout with cards

---

## 🌟 Accessibility

* All navigation elements must be keyboard-accessible
* Follow WAI-ARIA where applicable (PrimeNG mostly handles this)
* Test with screen readers before final release
* Tab/arrow key navigation supported by PrimeNG defaults
* Run Lighthouse Accessibility audit (Chrome DevTools)

---

## 📌 Next Steps

1. ✅ Finalize `MainLayoutComponent` (menubar/sidebar/branding/shell)
2. ✅ Scaffold core pages (dashboard, jobs, etc.)
3. ✅ Confirm theme setup and `.dark-mode` toggle works
4. ⚡ Begin `DashboardPage` layout using:

    * `JobSummaryCard`
    * `DeadlineTrackerWidget` (placeholder data)
5. ⚖️ Stub out widget components in `/shared/widgets/`
6. ✅ Add basic keyboard accessibility tests per component

---

## 🛠️ Folder Structure Reference

```plaintext
src/
├── app/
│   ├── core/                # App-wide services, models, etc.
│   ├── layout/
│   │   └── main-layout.component.{ts,html,scss}
│   ├── dashboard/
│   │   └── dashboard.page.{ts,html,scss}
│   ├── jobs/
│   ├── reports/
│   ├── settings/
│   ├── profile/
│   ├── login/
│   ├── shared/
│   │   └── widgets/
│   │       ├── job-summary-card/
│   │       └── deadline-tracker-widget/
```

---

This document will guide future development and help maintain design consistency as the application scales.
