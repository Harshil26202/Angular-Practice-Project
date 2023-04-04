import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent {
  userName =''
  constructor() {
    this.userName = ''
  }
  resetUserName() {
    this.userName = ''
  }
  ngOnInit() {

  }
}
