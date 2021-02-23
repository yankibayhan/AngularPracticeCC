import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './counter/state/counter.reducer';
import { DisplayComponent } from './counter/display/display.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { MainCounterComponent } from './counter/main-counter/main-counter.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    ButtonsComponent,
    MainCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter : counterReducer}), // imported the store module and its forRoot method
    NoopAnimationsModule, 
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
