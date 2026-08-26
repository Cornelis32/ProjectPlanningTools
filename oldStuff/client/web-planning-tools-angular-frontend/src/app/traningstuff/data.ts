import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'date-component',
  template: `
    {{ date | date: 'medium' }}
    {{ num | number: '3.2-4' }}
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [DatePipe, DecimalPipe],
})
export class DataComponent {
  // 16th of June, 2026
  // No named parameters unfortunately
  date: Date = new Date(2026, 6, 16);
  num: number = 1.2345678;
}
