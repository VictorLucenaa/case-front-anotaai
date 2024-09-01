import { TestBed } from '@angular/core/testing';
import { CardsService } from './cards.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Icards } from '../interfaces/icards';

describe('CardsService', () => {
  let service: CardsService;
  let httpTestingController: HttpTestingController;
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
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardsService],
    });
    service = TestBed.inject(CardsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch cards successfully', () => {
    service.getCards$().subscribe((cards) => {
      expect(cards).toEqual(mockCards);
      expect(service.isLoading()).toBe(false);
    });

    const req = httpTestingController.expectOne(service['url']);
    expect(req.request.method).toBe('GET');
    req.flush(mockCards);
  });

  it('should handle error when fetching cards', () => {
    const errorMessage = 'Error fetching cards';

    service.getCards$().subscribe(
      () => {},
      (error) => {
        expect(error.message).toContain(errorMessage);
        expect(service.isLoading()).toBe(false);
      }
    );
    const req = httpTestingController.expectOne(service['url']);
    expect(req.request.method).toBe('GET');
    req.flush(errorMessage, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });
});
