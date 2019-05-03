import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';
import { FacebookService } from 'ngx-facebook';
import {RestService} from '../services/rest.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    UserService,
    StorageService,
    FacebookService,
    RestService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
