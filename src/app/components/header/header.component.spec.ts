import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('.text-container__title');

    expect(titleElement?.textContent?.trim()).toBe(
      'Teste de Desenvolvedor Front-End - Anota AI'
    );
  });

  it('should display the correct subtitle', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const subtitleElement = compiled.querySelector('.text-container__subtitle');
    expect(subtitleElement?.textContent?.trim()).toBe(
      'Victor Jose Lucena da Silva'
    );
  });
});
