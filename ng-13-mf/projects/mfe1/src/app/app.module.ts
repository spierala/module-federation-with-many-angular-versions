import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [] // No bootstrap components!
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    console.log('ngDoBootstrap');

    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('angular13-element', ce);
  }
}
