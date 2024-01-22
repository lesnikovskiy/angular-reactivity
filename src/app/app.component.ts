import { Component } from '@angular/core';
import { Model } from './models/model';
import { ModelDirective } from './directives/model.directive';
import { IllegalDirective } from './directives/illegal.directive';
import { ValidityDisplayComponent } from './components/validity-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ModelDirective,
    IllegalDirective,
    ValidityDisplayComponent,
  ],
  template: `
    <div>
      <label>Forbidden:</label> <input #forbid (input)="null">
    </div>
    <div>
      <label>Value:</label> <input [model]="myModel" [illegal]="forbid.value">
    </div>
    <div>
      <validity-display [model]="myModel" />
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
