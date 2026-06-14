import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'form',
    template: `
    <label for="id">
        {{ title }}
        <input id="id" type="text" [(ngModel)]="value" />
    </label>
    `,
    imports: [FormsModule],
})
export class FormComponent {
    id: string = "stuff"
    title: string = "Some stuff"
    value: string = ""
}
