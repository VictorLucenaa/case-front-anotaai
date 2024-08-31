import { Component } from '@angular/core';
import { FocusStyleDirective } from '../../directives/focus-style.directive';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FocusStyleDirective],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {}
