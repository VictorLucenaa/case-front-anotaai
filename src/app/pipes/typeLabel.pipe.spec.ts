import { TypeLabelPipe } from './typeLabel.pipe';

describe('TypePipe', () => {
  let pipe: TypeLabelPipe;

  beforeEach(() => {
    pipe = new TypeLabelPipe();
  });

  it('should return "Paisagem" for type "1"', () => {
    const result = pipe.transform('1');
    expect(result).toBe('Paisagem');
  });

  it('should return "Flor" for type "2"', () => {
    const result = pipe.transform('2');
    expect(result).toBe('Flor');
  });

  it('should return "Pizza" for type "3"', () => {
    const result = pipe.transform('3');
    expect(result).toBe('Pizza');
  });

  it('should return "Tipo Inválido" for an empty string"', () => {
    const result = pipe.transform('');
    expect(result).toBe('Tipo Inválido!');
  });
});
