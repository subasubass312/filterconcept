import { UpperCasePipe } from '@angular/common/src/pipes';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Search Using ng2-search-filter';
  searchText;
  heroes = [
    { id: 1, name: 'Mr. Nice', country: 'India' },
    { id: 2, name: 'Narco', country: 'USA' },
    { id: 3, name: 'Bombasto', country: 'UK' },
    { id: 4, name: 'Celeritas', country: 'Canada' },
    { id: 5, name: 'Magneta', country: 'Russia' },
    { id: 6, name: 'RubberMan', country: 'China' },
    { id: 7, name: 'Dynama', country: 'Germany' },
    { id: 8, name: 'Dr IQ', country: 'Hong Kong' },
    { id: 9, name: 'Magma', country: 'South Africa' },
    { id: 10, name: 'Tornado', country: 'Sri Lanka' },
  ];
  datalist = [1, 2, 4, 4, 5, 5, 6, 6, 9];
  output = [];
  newdata: any;
  searchfun() {
    this.output = this.datalist.filter((object) => object == this.newdata);
  }
}
