import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

const highContrastMobile = definePreset(Aura, {
  semantic: {
    surface: {
      0: '#ffffff',
      50: '#f8f9fa',
      100: '#e9ecef',
    },
    onSurface: {
      0: '#000000',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: highContrastMobile,
        options: {
          darkModeSelector: '.dark-mode',
        },
      },
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
  ],
};
