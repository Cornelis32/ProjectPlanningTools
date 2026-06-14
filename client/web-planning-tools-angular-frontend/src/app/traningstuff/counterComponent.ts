import {Component, output} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: '<button (click)="setNumEvent()">Increment</button>',
})
export class CounterComponent {
    incrementEvent = output<number>();
    count: number = 0;

    setNumEvent(): void {
        this.count++;
        this.incrementEvent.emit(this.count);
    }
};
