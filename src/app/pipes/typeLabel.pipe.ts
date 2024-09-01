import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeLabel',
  standalone: true,
})
export class TypeLabelPipe implements PipeTransform {
  private readonly typeMap: { [key: string]: string } = {
    '1': 'Paisagem',
    '2': 'Flor',
    '3': 'Pizza',
  };

  transform(value: string): string {
    return this.typeMap[value] || 'Tipo Inválido!';
  }
}
