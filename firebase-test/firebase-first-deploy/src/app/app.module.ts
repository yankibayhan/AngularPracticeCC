import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Fire Modules
import { FirebaseService } from './services/firebase.service';
import { AngularFireModule } from '@angular/fire';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({  /// Implemented from my firebase console
      apiKey: "AIzaSyB6t4pH8sQaAiDs8CvN3OQv8FQ-RymAhwo",
      authDomain: "fir-test-590c9.firebaseapp.com",
      projectId: "fir-test-590c9",
      storageBucket: "fir-test-590c9.appspot.com",
      messagingSenderId: "908477583250",
      appId: "1:908477583250:web:5d2b4b81120729c3927b4b",
      measurementId: "G-81SDVSJGPD"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
