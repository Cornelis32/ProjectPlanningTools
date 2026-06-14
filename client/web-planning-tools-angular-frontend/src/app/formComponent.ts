import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

// use of [(ngModel)] here both puts the value of there with [] and updates the value on input with the ()

@Component({
    selector: 'my-form',
    template: `
    <label for="id">
        {{ title }}
        <input id="id" type="text" [(ngModel)]="value" (ngModelChange)="valueChange.emit($event)" />
    </label>
    `,
    imports: [FormsModule],
})
export class FormComponent {
    id: string = "stuff"
    title: string = "Some stuff"
    value: string = "Type text here..."
    valueChange = output<string>()
}
