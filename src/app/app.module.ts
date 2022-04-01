import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryDateStorageModule, NavToAddTaskComponentModule } from '@home';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryTaskStorageModule } from 'projects/tasks/src/lib/adapters/secondary/infrastructure/in-memory-task.storage-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavToAddTaskComponentModule,
    AngularFireModule.initializeApp(environment.firestoreConfig),
    BrowserAnimationsModule,
    InMemoryDateStorageModule,
    InMemoryTaskStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
