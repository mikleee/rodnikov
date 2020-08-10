import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";
import {CatalogueStore, ProductCategory} from "../components/catalogue/catalogue.model";

@Injectable({
  providedIn: 'root'
})
export class DropboxService {
  private accessToken: string = 'QuElEwkQw5AAAAAAAAAAAXXIjd9p_dTr-cSSUrBookc9MCFJKIzDVRZRO9u1Fgoz';
  private catalogue: any;

  constructor(private httpClient: HttpClient,
              private datePipe: DatePipe) {
  }

  getCatalogue(): Observable<CatalogueStore> {
    return new Observable<CatalogueStore>((observer) => {
      if (this.catalogue) {
        observer.next(this.catalogue);
      } else {
        this.getCatalogues()
          .subscribe(result => {
            let file = result.entries
              .filter(e => e.name.endsWith('catalogue.json'))
              .sort((e1, e2) => new Date(e2.client_modified).getTime() - new Date(e1.client_modified).getTime())
              [0];
            if (file == null) {
              observer.error();
            } else {
              this.getCatalogueContent(file)
                .subscribe(r => {
                  this.catalogue = new CatalogueStore(r as ProductCategory[]);
                  observer.next(this.catalogue);
                }, e => observer.error(e));
            }
          }, error => {
            observer.error(error);
          });
      }
    });
  }

  saveCatalogue(data: ProductCategory[]): Observable<Object> {
    let url = 'https://content.dropboxapi.com/2/files/upload';
    let file = `/catalogs/${this.datePipe.transform(new Date(), 'yyyy-MM-dd-HH:mm')}-catalogue.json`;

    let blob = new Blob([JSON.stringify(data)], {type: 'application/json'});

    let result = this.httpClient.post(url, blob, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Dropbox-API-Arg': JSON.stringify({path: file, mode: 'add', "autorename": true, "mute": false, "strict_conflict": false}),
          'Content-Type': 'application/octet-stream'
        }
      }
    );
    result.subscribe(s => this.catalogue = null);
    return result
  }

  private getCatalogues(): Observable<ListFolderResponse> {
    let url = 'https://api.dropboxapi.com/2/files/list_folder';

    return this.httpClient.post<ListFolderResponse>(url,
      {
        'path': '/catalogs',
        'recursive': false,
        'include_media_info': false,
        'include_deleted': false,
        'include_has_explicit_shared_members': false,
        'include_mounted_folders': true,
        'include_non_downloadable_files': true
      },
      {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
  }

  private getCatalogueContent(file: FileEntry): Observable<Object> {
    let url = 'https://content.dropboxapi.com/2/files/download';

    return this.httpClient.post<Object>(url, null, {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
          'Dropbox-API-Arg': JSON.stringify({path: file.id})
        }
      }
    );
  }

}

interface ListFolderResponse {
  "cursor": string;
  "has_more": boolean;
  "entries": FileEntry[]
}

interface FileEntry {
  ".tag": string;
  "name": string;
  "path_lower": string;
  "path_display": string;
  "id": string;
  "client_modified": string;
  "server_modified": string;
  "rev": string;
  "size": number;
  "is_downloadable": boolean;
  "content_hash": string;
}
