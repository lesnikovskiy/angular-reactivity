import { Component } from '@angular/core';
import { Model } from './models/model';
import { ModelDirective } from './directives/model.directive';
import { IllegalDirective } from './directives/illegal.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ModelDirective,
    IllegalDirective,
  ],
  template: `
    <div>
      <label>Illegal:</label> <input #forbid>
    </div>
    <div>
      <label>Value:</label> <input [model]="myModel" [illegal]="forbid.value">
    </div>
    <div>
      <label>Status</label> {{ myModel.valid ? 'Valid' : 'Invalid' }}
    </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myModel = new Model()

  constructor() {
    this.myModel.addValidator(value => value.length > 0);
  }
}
