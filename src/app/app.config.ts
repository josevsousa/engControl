import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(()=>initializeApp(
        {
          apiKey: "AIzaSyDe4Tm5_DwVN4QJax8G994JJonvdWqy7Ho",
          authDomain: "engcontrol-47da5.firebaseapp.com",
          projectId: "engcontrol-47da5",
          storageBucket: "engcontrol-47da5.appspot.com",
          messagingSenderId: "33574015797",
          appId: "1:33574015797:web:2b156137f6ebe31ffb327c"
        }
      )),
      provideFirestore(()=>getFirestore())
    )
  ]
};
