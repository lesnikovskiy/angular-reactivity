import { ChangeDetectionStrategy, Component, Input, computed, input } from "@angular/core";
import { Model } from "../models/model";

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'validity-display',
  template: `
    <label>Validity:</label>
    <div class="validity" [class.valid]="model().valid()"></div>
  `,
  styleUrl: './validity-display.component.scss'
})
export class ValidityDisplayComponent {
  model = input.required<Model>();
}