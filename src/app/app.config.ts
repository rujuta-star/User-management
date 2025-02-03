import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes  } from '@angular/router';
import { provideHttpClient, HttpClientModule } from '@angular/common/http';

import { provideClientHydration } from '@angular/platform-browser';
import { zip } from 'rxjs/operators';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
];
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient()  // Add HttpClient provider here
  ]
};