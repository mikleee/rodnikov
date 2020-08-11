import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ViewState} from "./service/viewStateFactory.service";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private datePipe: DatePipe) {

  }

  load<T>(observable: Observable<T>, state: ViewState, callback: (result: T) => void): Observable<T> {
    state.loading();
    observable.subscribe((result) => {
      state.ready();
      callback(result);
    }, (error) => state.error());
    return observable;
  }

  submit<T>(observable: Observable<T>, state: ViewState, callback?: (result: T) => void): Observable<T> {
    state.submitting();
    observable.subscribe((result) => {
      state.ready();
      callback(result);
    }, (error) => state.error());
    return observable;
  }

  downloadFile(data: any, name: string): void {
    let blob = new Blob([data], {type: "octet/stream"});
    let a = document.createElement("a");

    try {
      a.style.display = "none";
      a.href = window.URL.createObjectURL(blob);
      a.download = name;

      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(a.href);
    } finally {
      document.body.removeChild(a);
    }
  }

  fileTimeStamp(date: Date = new Date()): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd-HH-mm');
  }


}
