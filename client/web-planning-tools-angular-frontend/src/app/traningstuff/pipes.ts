import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'pipes',
    template: `{{ message | uppercase }}`,
    imports: [UpperCasePipe]
})
export class PipesComponent {
    message: string = 'hello there';
}
