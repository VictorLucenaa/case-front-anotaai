import { CardsComponent } from './cards.component';
import { CardsService } from '../../services/cards.service';
import { Icards } from '../../interfaces/icards';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let cardsServiceMock: Partial<CardsService>;
  const mockCards: Icards[] = [
    {
      id: 1,
      title: 'Feijoada Completa',
      description:
        'Tradicional prato brasileiro com uma variedade de carnes e acompanhamentos.',
      img: 'assets/images/feijoada-image.jpg',
      type: '1',
    },
    {
      id: 2,
      title: 'Caesar Salad',
      description:
        'Folhas de alface frescas com croutons, parmesão e molho Caesar.',
      img: 'assets/images/caesar-salad-image.jpg',
      type: '2',
    },
  ];

  beforeEach(() => {
    cardsServiceMock = {
      getCards$: jest.fn().mockReturnValue({
        subscribe: (observer: { next: (cards: Icards[]) => void }) => {
          observer.next(mockCards);
        },
      }),
      isLoading: jest.fn().mockReturnValue(false),
    };
    component = new CardsComponent(cardsServiceMock as CardsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load cards on init', () => {
    component.ngOnInit();
    expect(component.cards.length).toBe(2);
    expect(component.cards).toEqual(mockCards);
  });

  it('should update searchTextValue on value change', () => {
    component.onValueChange('texto de pesquisa novo');
    expect(component.searchTextValue).toBe('texto de pesquisa novo');
  });

  it('should remove a card', () => {
    component.cards = mockCards;
    component.removeCard(mockCards[0]);
    expect(component.cards.length).toBe(1);
    expect(component.cards[0]).toEqual(mockCards[1]);
  });

  it('should return loading state', () => {
    expect(component.isLoading()).toBeFalsy;
  });
});
