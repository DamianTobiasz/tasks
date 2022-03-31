import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryDateStorageModule, NavToAddTaskComponentModule } from '@home';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavToAddTaskComponentModule,
    AngularFireModule.initializeApp(environment.firestoreConfig),
    BrowserAnimationsModule,
    InMemoryDateStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
