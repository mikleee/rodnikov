import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DropboxService {
  private accessToken: string = 'Kr3jYtloFMAAAAAAAAAAAUcYYfDJTK6QsId3kJF_NsF13XGqyB3r7jF5SDHwAlcp';
  private baseFilesUrl: string = 'https://content.dropboxapi.com/2/files';

  constructor(private httpClient: HttpClient) {

  }

  getCatalogue(): Observable<Object> {
    let url = `${this.baseFilesUrl}/download`;
    let file = '/catalogue.json';

    return this.httpClient.post(url, null, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Dropbox-API-Arg': JSON.stringify({path: file})
        }
      }
    );
  }


}
