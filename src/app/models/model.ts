export class Model {
  value = '';

  private validators: Array<(value: string) => boolean> = [];

  get valid(): boolean {
    return this.validators.every(fn => fn(this.value));
  }

  addValidator(validator: (value: string) => boolean): void {
    this.validators.push(validator);
  }
}
