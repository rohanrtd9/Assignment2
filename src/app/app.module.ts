import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { JeHomeComponent } from './je-home/je-home.component';
import { LmHomeComponent } from './lm-home/lm-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    JeHomeComponent,
    LmHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    RouterModule.forRoot([
      
      
      {
        path:'',
        component:LoginSignupComponent
      },
      {
        path:'JE',
        component:JeHomeComponent
      },
      {
        path:'LineMan',
        component:LmHomeComponent
      },
      
      
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
