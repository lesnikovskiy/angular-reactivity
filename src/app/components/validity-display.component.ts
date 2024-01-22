import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { Model } from "../models/model";

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'validity-display',
  template: `
    <label>Validity:</label>
    <div class="validity" [class.valid]="model.valid"></div>
  `,
  styleUrl: './validity-display.component.scss'
})
export class ValidityDisplayComponent {
  @Input({ required: true }) model!: Model;
}