import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Router Tutorial';
  isShowDiv = false;
 
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}

