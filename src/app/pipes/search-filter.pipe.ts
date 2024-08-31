import { Pipe, PipeTransform } from '@angular/core';
import { Icards } from '../interfaces/icards';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(cards: Icards[], searchText: string): Icards[] {
    if (!searchText) {
      return cards;
    }

    const searchTerm = searchText.toLocaleLowerCase();

    return cards.filter(
      (card) =>
        card.title.toLocaleLowerCase().includes(searchTerm) ||
        card.description.toLocaleLowerCase().includes(searchTerm)
    );
  }
}
