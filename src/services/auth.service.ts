import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { StorageService } from './storage.service';
import { FacebookService } from 'ngx-facebook';
import { API_BASE_URL } from '../values/api-config';
import { SOCIALS } from '../values/social-keys';
import { GoogleAuthService } from 'ng-gapi';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService {

  constructor(
    _storage: StorageService,
    private fb: FacebookService,
    private ggl: GoogleAuthService
  ) {
    super(_storage);
    fb.init(
      {
        appId: SOCIALS.FACEBOOK_CONSUMER_KEY,
        status: false, // the SDK will attempt to get info about the current user immediately after init
        cookie: false,  // enable cookies to allow the server to access the session
        xfbml: false,  // With xfbml set to true, the SDK will parse your page's DOM to find and initialize any social plugins that have been added using XFBML
        version: 'v2.8' // use graph api version 2.5
      }
    );

  }

  // authorization(data)  {
  //   let params = {
  //     'username': data.email,
  //     'password': data.password
  //   };
  //   const encodedParams = this.encodeQueryParams(params);
  //   return this.sendPOST(API_BASE_URL, encodedParams)
  //     .then(
  //       response => {
  //         let token = response.headers.get('x-auth-token');
  //         if (token) {
  //           this.storage.store('MUUSICAT-TOKEN', token);
  //         }
  //         resolve(response.json());
  //       }
  //     )
  //     .catch(
  //       () => reject()
  //     );
  // }

  fbLogin() {
    return new Promise((resolve, reject) => {
      this.fb.login({'scope': 'public_profile,email'})
        .then(
          result => {
            console.log('FB authorization result: ', result);
            if (result.authResponse) {
              let accessToken = result.authResponse.accessToken;
              console.log('FB access token: ', accessToken);
              return this.sendPOST(
                'http://our-lovely-backend.com/api/v1',
                { access_token: accessToken }
              )
                .then(
                  response => {
                    let token = response.headers.get('x-auth-token');
                    if (token) {
                      this.storage.store('MUUSIKAT-TOKEN', token)
                    }
                    resolve(response.json());
                  }
                )
                .catch(
                  () => reject()
                )
            } else {
              reject();
            }
          }
        );
    });
  }

  gglLogin() {
    return new Promise((resolve, reject) => {
      this.ggl.getAuth()
        .subscribe((auth) => {
          auth.signIn()
            .then(
              result => {
                if (result) {
                  let accessToken = result.Zi.access_token;
                  console.log('GGL access token: ', accessToken);
                  return this.sendPOST(
                    'http://our-lovely-backend.com/api/v1',
                    { access_token: accessToken }
                  )
                    .then(
                      response => {
                        let token = response.headers.get('x-auth-token');
                        if (token) {
                          this.storage.store('MUUSIKAT-TOKEN', token);
                        }
                        resolve(response.json());
                      }
                    )
                    .catch(
                      () => reject()
                    )
                } else {
                  reject();
                }
              }
            )
        })
        .unsubscribe()
    })
  }

  logout() {
    this.storage.remove('MUUSIKAT-TOKEN')
  }

  isLoggedIn() {
    // calls getCurrentUser to get user data or
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {

    })
  }

  encodeQueryParams(params) {
    return Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
      )
      .join(
        '&'
      )
  }


}
