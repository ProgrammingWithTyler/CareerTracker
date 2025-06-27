// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig).catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser'; // ✅ Angular 15+
import { appConfig } from './app/app.config'; // ✅ Contains providers, routes, etc.
import { App } from './app/app.component'; // ✅ Standalone root component

bootstrapApplication(App, appConfig).catch((err) => console.error(err)); // ✅ Bootstraps your app cleanly
