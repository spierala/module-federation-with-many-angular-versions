import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  ngVersion = VERSION.full;
}
