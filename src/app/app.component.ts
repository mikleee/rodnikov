import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchString: string;

  constructor(private router: Router) {
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


}
