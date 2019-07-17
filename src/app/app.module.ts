import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';


export const firebaseConfig = {
  apiKey: "AIzaSyAQIo3SufJEr4CaHCQ8JrEcCJvyJxQ_e9I",
  authDomain: "frea-testing.firebaseapp.com",
  databaseURL: "https://frea-testing.firebaseio.com",
  projectId: "frea-testing",
  storageBucket: "frea-testing.appspot.com",
  messagingSenderId: "678647225133",
  appId: "1:678647225133:web:31ae922e6969c7ec"
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    MembersComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
