import { Directive, Input, inject, input } from "@angular/core";
import { ModelDirective } from "./model.directive";

@Directive({
  standalone: true,
  selector: '[illegal]'
})
export class IllegalDirective {
  private readonly modelDirective = inject(ModelDirective, { self: true });

  illegal = input.required<string>();

  ngOnInit(): void {
    this.modelDirective.model.addValidator(value => {
      for (const ch of this.illegal()) {
        if (value.includes(ch)) {
          return false;
        }
      }

      return true;
    });
  }
}