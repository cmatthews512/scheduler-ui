import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Chris';
  title = 'scheduler-web-ui';
  isShowDiv = false;
 
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}