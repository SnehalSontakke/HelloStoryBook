import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeEmployeeComponent } from './welcome-employee/welcome-employee.component';
import { WelcomeInternComponent } from './welcome-intern/welcome-intern.component';
import { WelcomingMsgComponent } from './welcoming-msg/welcoming-msg.component';
import { CardComponent } from './card/card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeEmployeeComponent,
    WelcomeInternComponent,
    WelcomingMsgComponent,
    CardComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
