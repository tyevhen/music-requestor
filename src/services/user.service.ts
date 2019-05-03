import { CrudService } from './crud.service';
import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends CrudService {

  constructor(
    _storage: StorageService
  ) {
   super(_storage);
   this.resource = 'posts'
  }

  async getUser(userId) {
    return this.view(userId)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Not found');
        }
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        this.handleError(error);
      });
  };

  async getUsers() {
    return this.list()
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Not found');
        }
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        throw error;
      });
  };

  async addUser(object) {
    return this.create(object)
      .then(
        resp => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error('Not found');
          }
        }
      )
      .then(
        data => {
          return data;
        }
      )
      .catch(
        error => {
          throw error;
        }
      )
  };

  async deleteUser(userId) {
    return this.delete(userId)
      .then(
        resp => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error('Not found');
          }
        }
      )
      .then(
        data => {
          return data;
        }
      )
      .catch(
        error => {
          throw error;
        }
      )
  };

  async updateUser(userId, object) {
    return this.update(userId, object)
      .then(
        resp => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error('Not found');
          }
        }
      )
      .then(
        data => {
         return data;
        }
      )
      .catch(
        error => {
          throw error;
        }
      )
  }
}
