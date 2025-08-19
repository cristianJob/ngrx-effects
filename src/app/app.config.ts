import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { appReducer } from './store/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { EffectsArray } from './store/effects';





export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(appReducer),
    provideEffects(EffectsArray),
    provideStoreDevtools({ maxAge: 25, logOnly: true }),
   
]
};
