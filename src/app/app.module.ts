import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    AppRoutingModule, 
    BrowserModule, 
    PagesModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
