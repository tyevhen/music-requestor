import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';
import { FacebookModule, FacebookService } from 'ngx-facebook';
import { RestService } from '../services/rest.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FacebookModule.forRoot(),

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
