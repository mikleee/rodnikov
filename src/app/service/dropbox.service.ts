import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DropboxService {
  private accessToken: string = '4boTB42819AAAAAAAAAAAWUdbrxJBPm3DquCovFzuxbiH7xNUHFjUP8bpSW8u6JK';
  private baseFilesUrl: string = 'https://content.dropboxapi.com/2/files';

  constructor(private httpClient: HttpClient) {

  }

  getCatalogue(): Observable<Object> {
    let url = `${this.baseFilesUrl}/download`;
    let file = '/catalogue.example.json';

    return this.httpClient.post(url, null, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Dropbox-API-Arg': JSON.stringify({path: file})
        }
      }
    );
  }


}
