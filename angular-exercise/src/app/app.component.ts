import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
     <link href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
     <div class="col-md-6 col-md-offset-3">
     <router-outlet></router-outlet>
     </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
