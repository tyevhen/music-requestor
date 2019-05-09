import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserService } from '../services/user.service';
import { StorageService } from '../services/storage.service';
import { FacebookModule, FacebookService } from 'ngx-facebook';
import { RestService } from '../services/rest.service';
import { SOCIALS } from '../values/social-keys';
import {
  GoogleApiModule,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
} from 'ng-gapi';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: SOCIALS.GOOGLE_CONSUMER_KEY,
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FacebookModule.forRoot(),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  providers: [
    UserService,
    StorageService,
    RestService,
    FacebookService,
    GoogleAuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
