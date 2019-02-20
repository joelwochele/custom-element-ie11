import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from "@angular/elements";

import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [ ButtonComponent ],
  imports: [ BrowserModule ],
  entryComponents: [ ButtonComponent ]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const customBtn = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('app-btn', customBtn);
  }
}
