import { Directive, ElementRef, HostListener, Input, inject } from "@angular/core";
import { Model } from "../models/model";

@Directive({
  standalone: true,
  selector: 'input[model]'
})
export class ModelDirective {
  private readonly el = inject<ElementRef<HTMLInputElement>>(ElementRef);

  @Input({ required: true }) model!: Model;

  @HostListener('input')
  onInput(): void {
    this.model.value = this.el.nativeElement.value;
  }

  ngDoCheck(): void {
    this.el.nativeElement.value = this.model.value;
  }
}