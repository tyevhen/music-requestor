import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

  constructor(
    public storage: StorageService
  ) {}

  sendGET(url) {
    return fetch(url);
  }

  sendPOST(url, data?: any, contentType: string = 'application/json;charset=utf-8') {
    let options = {
      method: 'POST',
      headers: this.getHeaders(contentType),
      body: this.constructBody(data, contentType)
    };
    return fetch(url, options)
  }

  sendPUT(url, data, contentType: string = 'application/json;charset=utf-8') {
    let options = {
      method: 'PUT',
      headers: this.getHeaders(contentType),
      body: JSON.stringify(data)
    };
    return fetch(url, options)
  }

  sendDELETE(url, contentType: string = 'application/json;charset=utf-8') {
    let options = {
      method: 'DELETE',
      headers: this.getHeaders(contentType)
    };
    return fetch(url, options)
  }

  handleError(error) {
    console.log('Handling error: ', error);
  }

  getHeaders(contentType) {
    return {
      'Content-Type': contentType,
      'X-Auth-Token': this.getToken()
    };
  }

  getToken() {
    try{
      return this.storage.get('MUUSIKAT-TOKEN')
    } catch (e) {
      console.log('Cannot get token: ', e);
    }
  }

  constructBody(data, contentType) {
    return contentType === 'application/json;charset=utf-8'
      ? JSON.stringify(data)
      : data;
  }
}
