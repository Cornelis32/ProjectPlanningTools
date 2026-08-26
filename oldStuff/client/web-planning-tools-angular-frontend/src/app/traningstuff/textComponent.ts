import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  template: '<p><span class="tag"><ng-content/></span></p>',
})
export class TextComponent {}
