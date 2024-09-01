import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit valueChange event when input changes', () => {
    const emitSpy = jest.spyOn(component.valueChange, 'emit');
    const inputElement = fixture.debugElement.query(By.css('input'));
    const testValue = 'test value 1';

    inputElement.nativeElement.value = testValue;
    inputElement.nativeElement.dispatchEvent(new Event('input'));

    component.onInputchange();

    expect(emitSpy).toHaveBeenCalledWith(testValue);
  });

  it('should update searchText when input changes', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    const testValue = 'teste value 2';

    inputElement.nativeElement.value = testValue;
    inputElement.nativeElement.dispatchEvent(new Event('input'));

    component.onInputchange();

    expect(component.searchText).toBe(testValue);
  });
});
