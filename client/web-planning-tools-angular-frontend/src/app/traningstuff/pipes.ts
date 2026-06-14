import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'pipes',
  template: `{{ message | uppercase }}`,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [UpperCasePipe],
})
export class PipesComponent {
  message: string = 'hello there';
}
