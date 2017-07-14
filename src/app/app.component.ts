import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VijayApp check response';
  appStatus: boolean = false;
  appList: any[] = [ {
    'ID': '1',
    'Name' : 'One'
  },
    {
      'ID': '2',
      'Name' : 'Two'
    } ];
  constructor() {
      console.log('hii');
    }


}
