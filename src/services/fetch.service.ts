export class FetchService {
  resource: string;
  options: {};

  constructor(
    url: string,
    params: any
  ) {
    this.resource = url;
    this.options = params;
  }

  doFetch(resource, options) {
    return fetch(resource, options)
      .then(
        (resp: Response) => {
          console.log('success');
          if (resp.ok) {
            return resp.json();
          } else {
            throw Error(`Request rejected with status ${resp.status}`)
          }
        }
      )
      .catch(
        (error: Error) => {
          console.log('error caught');
          this.handleError(error);
        }
      )
      .finally(
        () => {
          console.log('fetch done');
        }
      )
  }

  handleError(error) {
    console.log(error)
  }
}
