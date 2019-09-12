import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-employee',
  templateUrl: './welcome-employee.component.html',
  styleUrls: ['./welcome-employee.component.css']
})
export class WelcomeEmployeeComponent implements OnInit {
  @Input() name: string;
  @Output() myEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
