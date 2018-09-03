import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transformTrueFalse' })

export class TransformTrueFalsePipe implements PipeTransform {
  /**
   * [transform Returns true or false based on a value]
   * @param value Value on the basis of which transformation is to be done
   * @param args Array for more than one value to be transformed
   */
  transform(value: string, args: string[]): any {

    if (value) {
      return 'YES';
    } else {
      return 'NO';
    }
  }
}
