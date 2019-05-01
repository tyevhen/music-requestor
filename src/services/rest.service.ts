import { FetchService } from './fetch.service';
import { HttpHeaders } from '@angular/common/http';

export class RestService {

  resource: string;

  constructor() {}

  sendGET(url) {
    return fetch(url);
  }

  sendPOST(url, object: any, isTokenRequired: boolean = false) {
    let options = {
      method: 'POST',
      headers: this.getHeaders(isTokenRequired),
      body: JSON.stringify(object)
    };
    return fetch(url, options)
  }

  sendPUT(url, object) {
    let options = {
      method: 'PUT',
      body: JSON.stringify(object)
    };
    return fetch(url, options)
  }

  sendDELETE(url) {
    let options = {
      method: 'DELETE',
    };
    return fetch(url, options)
  }

  handleError(error) {
    console.log('Handling error: ', error);
  }

  getHeaders(isTokenRequired: boolean) {
    let headers = {};
    if (isTokenRequired) {
      headers = {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer '.concat('TOKEN777100500')
      };
    } else {
      headers = { 'Content-Type': 'application/json;charset=utf-8' };
    }
    return headers;
  }
}
