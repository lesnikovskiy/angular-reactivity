import { computed, signal } from "@angular/core";

export class Model {
  value = signal('');

  private validators = signal<Array<(value: string) => boolean>>([]);

  valid = computed<boolean>(() =>
    this.validators().every(fn => fn(this.value()))
  );

  addValidator(validator: (value: string) => boolean): void {
    this.validators.update(arr => [...arr, validator]);
  }
}
