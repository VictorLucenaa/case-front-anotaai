import { Icards } from '../interfaces/icards';
import { SearchFilterPipe } from './search-filter.pipe';

describe('SearchFilterPipe', () => {
  let pipe: SearchFilterPipe;
  const cards: Icards[] = [
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
    pipe = new SearchFilterPipe();
  });

  it('should return the original array if no search text is provided', () => {
    const result = pipe.transform(cards, '');
    expect(result).toEqual(cards);
  });

  it('should filter cards by title and description', () => {
    const result = pipe.transform(cards, 'carnes');
    expect(result).toEqual([
      {
        id: 1,
        title: 'Feijoada Completa',
        description:
          'Tradicional prato brasileiro com uma variedade de carnes e acompanhamentos.',
        img: 'assets/images/feijoada-image.jpg',
        type: '1',
      },
    ]);
  });

  it('should return an empty array if no cards match the search text', () => {
    const result = pipe.transform(cards, 'item inexistente');
    expect(result).toEqual([]);
  });

  it('should be case insensitive', () => {
    const result = pipe.transform(cards, 'CAeSaR sALAD');
    expect(result).toEqual([
      {
        id: 2,
        title: 'Caesar Salad',
        description:
          'Folhas de alface frescas com croutons, parmesão e molho Caesar.',
        img: 'assets/images/caesar-salad-image.jpg',
        type: '2',
      },
    ]);
  });
});
