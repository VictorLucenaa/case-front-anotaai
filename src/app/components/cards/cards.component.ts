import { Component, OnInit } from '@angular/core';
import { Icards } from '../../interfaces/icards';
import { CardsService } from '../../services/cards.service';
import { HttpClientModule } from '@angular/common/http';
import { TypeLabelPipe } from '../../pipes/typeLabel.pipe';
import { SearchComponent } from '../search/search.component';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [HttpClientModule, TypeLabelPipe, SearchComponent, SearchFilterPipe],
  providers: [CardsService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  cards: Icards[] = [];
  searchTextValue: string = '';

  constructor(private cardsService: CardsService) {}

  onValueChange(value: string) {
    this.searchTextValue = value;
  }

  removeCard(cardToRemove: Icards): void {
    this.cards = this.cards.filter((card) => card.id !== cardToRemove.id);
  }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardsService.getCards$().subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  isLoading(): boolean {
    return this.cardsService.isLoading();
  }
}
