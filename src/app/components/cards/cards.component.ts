import { Component, OnInit } from '@angular/core';
import { Icards } from '../../interfaces/icards';
import { CardsService } from '../../services/cards.service';
import { HttpClientModule } from '@angular/common/http';
import { TypeLabelPipe } from '../../pipes/typeLabel.pipe';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [HttpClientModule, TypeLabelPipe],
  providers: [CardsService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent implements OnInit {
  cards: Icards[] = [];

  constructor(private cardsService: CardsService) {}

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
