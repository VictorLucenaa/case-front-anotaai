import { Component, EventEmitter, Output } from '@angular/core';
import { FocusStyleDirective } from '../../directives/focus-style.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FocusStyleDirective, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchText: string = '';

  @Output() valueChange = new EventEmitter<string>();

  onInputchange() {
    this.valueChange.emit(this.searchText);
  }
}
