import { CrudService } from './crud.service';

export class UserService extends CrudService {

  constructor() {
   super();
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
        return resp.json();
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
          return resp.json();
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
          return resp.json();
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
          return resp.json();
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
