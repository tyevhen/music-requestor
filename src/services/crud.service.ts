import { API_BASE_URL } from '../values/api-config';
import { RestService } from './rest.service';


export class CrudService extends RestService {

  resource: string;

  constructor(
  ) {
    super();
  }

  view(id, parameters?: any) {
    const url = this.constructUrl(this.resource, id);
    console.groupCollapsed('CRUD view');
    console.log('Resource: ', this.resource);
    console.log('Id: ', id);
    console.log('Params: ', parameters);
    console.log('URL: ', url);
    console.groupEnd();
    return this.sendGET(url);
  }

  list(parameters?: any) {
    const url = this.constructUrl(this.resource);
    console.groupCollapsed('CRUD list');
    console.log('Resource: ', this.resource);
    console.log('URL: ', url);
    console.groupEnd();
    return this.sendGET(url);
  }

  create(object) {
    const url = this.constructUrl(this.resource);
    console.groupCollapsed('CRUD create');
    console.log('Params crud: ', object);
    console.groupEnd();
    return this.sendPOST(url, object);
  }

  delete(id) {
    const url = this.constructUrl(this.resource, id);
    console.groupCollapsed('CRUD delete');
    console.log('Resource: ', this.resource);
    console.log('URL: ', url);
    console.log('Id: ', id);
    console.groupEnd();
    return this.sendDELETE(url);
  }

  update(id, object) {
    const url = this.constructUrl(this.resource, id);
    console.groupCollapsed('CRUD update');
    console.log('Resource: ', this.resource);
    console.log('Params: ', object);
    console.groupEnd();
    return this.sendPUT(url, object);
  }

  constructUrl(...args) {
    return API_BASE_URL.concat(args.join('/'));
  }
}
