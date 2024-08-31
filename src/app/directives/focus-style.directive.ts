import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appFocusStyle]',
  standalone: true,
})
export class FocusStyleDirective {
  @HostBinding('class.focused') isFocused: boolean = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('focus') onFocus() {
    this.isFocused = true;
    this.addFocusClass();
  }

  @HostListener('blur') onBlur() {
    this.isFocused = false;
    this.removeFocusClass();
  }

  addFocusClass() {
    this.elementRef.nativeElement.classList.add('focused');
    this.findImage().classList.add('focused');
  }

  removeFocusClass() {
    this.elementRef.nativeElement.classList.remove('focused');
    this.findImage().classList.remove('focused');
  }

  findImage(): HTMLElement {
    return this.elementRef.nativeElement.parentElement.querySelector('img');
  }
}
