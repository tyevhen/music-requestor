import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudService } from '../services/crud.service';
import { RestService } from '../services/rest.service';
import {UserService} from '../services/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CrudService,
    RestService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
