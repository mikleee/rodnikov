import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ViewStateFactoryService {

  newInstance(): ViewState {
    return new ViewState();
  }

}

export class ViewState {
  private static ready: string = 'ready';
  private static error: string = 'error';
  private static loading: string = 'loading';
  private static submitting: string = 'submitting';

  private state: string;

  getState() {
    return this.state;
  }

  ready() {
    this.setState(ViewState.ready);
  }

  isReady() {
    return this.isState(ViewState.ready);
  }

  error() {
    this.setState(ViewState.error);
  }

  isError() {
    return this.isState(ViewState.error);
  }

  loading() {
    this.setState(ViewState.loading);
  }

  isLoading() {
    return this.isState(ViewState.loading);
  }

  submitting() {
    this.setState(ViewState.submitting);
  }

  isSubmitting() {
    return this.isState(ViewState.submitting);
  }

  isInProgress() {
    return this.isSubmitting() || this.isLoading();
  }


  private setState(state: string) {
    this.state = state;
  }

  private isState(state: string) {
    return this.state == state;
  }

}
