export class UrlProvider {
  public static getBackendUrl(path: string): string {
    let host: string = window.location.hostname;
    if (host === 'localhost') {
      return 'http://localhost:8080' + path;
    }
    return path;
  }
}
