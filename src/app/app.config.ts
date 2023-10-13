import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { routes } from './app.routes';

import { AngularFireModule } from '@angular/fire/compat';
import { provideAnimations } from '@angular/platform-browser/animations';
import { enviroment } from './environments/environment';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(enviroment.firebase)), provideFirestore(() => getFirestore()),
      AngularFireModule.initializeApp(enviroment.firebase),
      AngularFireAuthModule
      ),
    provideAnimations()
]
};
