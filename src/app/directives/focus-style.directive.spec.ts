import { Component, ElementRef, input } from '@angular/core';
import { FocusStyleDirective } from './focus-style.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  standalone: true,
  template: ` <section>
    <input type="text" appFocusStyle />
    <img />
  </section>`,
  imports: [FocusStyleDirective],
})
class TestFocusStyleDirectiveComponent {}

describe('FocusStyleDirective', () => {
  let fixture: ComponentFixture<TestFocusStyleDirectiveComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FocusStyleDirective, TestFocusStyleDirectiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestFocusStyleDirectiveComponent);
    inputElement = fixture.nativeElement.querySelector('input');
    fixture.detectChanges();
  });

  it('should add "focused" class on focus', () => {
    const directive = new FocusStyleDirective(new ElementRef(inputElement));
    directive.onFocus();
    expect(directive.isFocused).toBe(true);
    expect(inputElement.classList.contains('focused')).toBe(true);
  });

  it('should remove "focused" class on blur', () => {
    const directive = new FocusStyleDirective(new ElementRef(inputElement));
    directive.onFocus();
    directive.onBlur();
    expect(directive.isFocused).toBe(false);
    expect(inputElement.classList.contains('focused')).toBe(false);

    expect(directive.findImage().classList.contains('focused')).toBe(false);
  });
});
