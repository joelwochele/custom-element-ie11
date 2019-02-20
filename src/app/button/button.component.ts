import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  template: `
    <button (click)="handleClick()">{{ label }}</button>
  `,
  styles: [`
      button {
          border: solid 3px;
          padding: 8px 10px;
          background: #8affd6;
          font-size: 20px;
      }
  `],
  encapsulation: ViewEncapsulation.ShadowDom // <-- Emulated = v0 | ShadowDom = v1
})
export class ButtonComponent implements OnInit {
  @Input() label = 'default button';
  @Output() myaction = new EventEmitter<number>();
  private clicksCt: number = 0;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.clicksCt++;
    console.log('Click handled inside component! Nbr of clicks: ' + this.clicksCt);
    this.myaction.emit(this.clicksCt);
  }

}
