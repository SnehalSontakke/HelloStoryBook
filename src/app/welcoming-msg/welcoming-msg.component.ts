import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcoming-msg',
  templateUrl: './welcoming-msg.component.html',
  styleUrls: ['./welcoming-msg.component.css']
})
export class WelcomingMsgComponent implements OnInit {
  //@Input('wlc') wlc: any;
  wlc:any="Welcome user";
  constructor() { }

  ngOnInit() {
  }

}
