import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ViewState} from "./service/viewStateFactory.service";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {

  }

  load<T>(observable: Observable<T>, state: ViewState, callback: (result: T) => void): Observable<T> {
    state.loading();
    observable.subscribe((result) => {
      state.ready();
      callback(result);
    }, (error) => state.error());
    return observable;
  }


}
