import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'Angular Router Tutorial';
}
=======
  name = 'Chris';
  title = 'scheduler-web-ui';
  isShowDiv = false;
 
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}
>>>>>>> 4ba8407efd02466ff40279ca8a36e39948db443a
