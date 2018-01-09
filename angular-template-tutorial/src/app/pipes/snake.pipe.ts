

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'snake'
})
export class SnakePipe implements PipeTransform{

    public transform(value: string): string {
        let result = '';
        let counter = 0;
        for (let char of value) {
            if (counter % 2 == 0) {
                result+=char.toUpperCase();
            } else {
                result+=char.toLowerCase();
            }
            counter++;
        }
        return result;
    }

}