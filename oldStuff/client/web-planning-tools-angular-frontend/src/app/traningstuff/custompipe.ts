import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'start',
})
export class MyStarPipe implements PipeTransform {
    transform(value: any): string {
        return `* ${value} *`;
    }
}

@Pipe({
    name: 'myReverse',
})
export class MyReversePipe implements PipeTransform {
    transform(value: string): string {
        let reverse = '';

        for (let index = value.length - 1; index >= 0; index--) {
            reverse += value[index];
        }

        return reverse;
    }
}
