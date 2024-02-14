import { Pipe, PipeTransform } from '@angular/core';

// julio | toogleCase = 'JULIO'
// JULIO | toogleCase = 'julio'

@Pipe({
  name: 'toogleCase',
  standalone: true,
})
export class ToogleCasePipe implements PipeTransform {
  transform(value: String, toUpper?: boolean): String {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
