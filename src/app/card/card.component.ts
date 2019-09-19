import { Component, Input, Output, EventEmitter } from '@angular/core';
import { text } from '@storybook/addon-knobs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
    `
    :host {
      text-align: center;
      background: white;
      display: block;
      padding: .45rem .65rem;
      border-radius: 3px;
      max-width: 325px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    h2 {
      color: #c85f7f;
    }

    p {
      text-align: center;
    }
  `
  ]
})
export class CardComponent {
  @Input('title') title;
  @Input('subtitle') subtitle;
  @Input('content') content ;
  @Input ('text') text="hello card";

  @Output() btnClicked = new EventEmitter<boolean>();

  constructor() {}

  handleBtnClick() {
    this.btnClicked.emit(true);
    console.log("i was clicked");
  }
}