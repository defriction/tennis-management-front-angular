import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import {
  heroFingerPrint,
  heroPhone,
  heroUser,
  heroTrophy,
  heroCreditCard,
  heroArrowRight,
  heroChevronDown
} from '@ng-icons/heroicons/outline';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIcons({
      heroFingerPrint,
      heroPhone,
      heroUser,
      heroTrophy,
      heroCreditCard,
      heroArrowRight,
      heroChevronDown
    })
  ]
};
