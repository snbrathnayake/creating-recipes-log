import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  spinners: string[] = [];

  constructor() {
    this.spinners = [
      'https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif',
      'https://loading.io/spinners/rolling/lg.curve-bars-loading-indicator.gif',
      'https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif',
      'https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
      'https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif',
      'https://cdn.dribbble.com/users/172906/screenshots/1185018/2013-08-04_21_14_41.gif'
    ]
  }

}
