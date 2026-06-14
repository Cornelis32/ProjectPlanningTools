import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '<button (click)="setNumEvent()">Increment</button>',
})
export class CounterComponent {
  incrementEvent = output<number>();
  count: number = 0;

  setNumEvent(): void {
    this.count++;
    this.incrementEvent.emit(this.count);
  }
}
