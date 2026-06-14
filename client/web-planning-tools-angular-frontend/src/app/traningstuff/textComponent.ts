import { Component } from '@angular/core';

@Component({
    selector: 'app-text',
    standalone: true,
    template: '<p><span class="tag"><ng-content/></span></p>',
})
export class TextComponent{ }
