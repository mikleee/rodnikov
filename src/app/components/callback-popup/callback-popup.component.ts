import {Component, OnInit} from '@angular/core';
import {TelegramService} from "../../service/telegram.service";
import {Callback} from "./callback.model";
import {ViewState, ViewStateFactoryService} from "../../service/viewStateFactory.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-callback-popup',
  templateUrl: './callback-popup.component.html',
  styleUrls: ['./callback-popup.component.scss']
})
export class CallbackPopupComponent implements OnInit {
  callback: Callback = {name: null, phone: null};
  state: ViewState;


  constructor(private tg: TelegramService,
              private modal: MatDialogRef<any>,
              private viewStateFactory: ViewStateFactoryService) {
    this.state = viewStateFactory.newInstance();
  }

  submitCallback() {
    this.state.submitting();
    this.tg.sendCallbackMessage(this.callback)
      .subscribe((value) => {
        this.callback.name = null;
        this.callback.phone = null;
        this.state.ready();
        this.modal.close();
      }, error => this.state.error());
  }

  ngOnInit(): void {
  }

}
