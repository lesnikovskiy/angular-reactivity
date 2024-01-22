import { Directive, Input, inject } from "@angular/core";
import { ModelDirective } from "./model.directive";

@Directive({
  standalone: true,
  selector: '[illegal]'
})
export class IllegalDirective {
  private readonly modelDirective = inject(ModelDirective, { self: true });

  private _illegal = '';
  @Input({ required: true }) set illegal(value: string) {
    setTimeout(() => this._illegal = value, 0);
  }

  ngOnInit(): void {
    this.modelDirective.model.addValidator(value => {
      for (const ch of this._illegal) {
        if (value.includes(ch)) {
          return false;
        }
      }

      return true;
    });
  }
}