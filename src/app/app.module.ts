import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgxElectronModule } from 'ngx-electron';

import { AppComponent } from './app.component';
import { RLSService } from './services/RLS.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxElectronModule
  ],
  providers: [RLSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
