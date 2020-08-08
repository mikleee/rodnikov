import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {Screen404Component} from "./components/screen404/screen404.component";
import {CallbackPopupComponent} from "./components/callback-popup/callback-popup.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchString: string;

  constructor(private router: Router,
              private dialog: MatDialog) {
  }

  onSearchKeyPress(event: any) {
    if (event.keyCode == 13) {
      this.router.navigate(['/search'], {
        queryParams: {
          query: this.searchString
        }
      });
    }
  }

  requestCallback() {
    this.dialog.open(CallbackPopupComponent);
  }


}
