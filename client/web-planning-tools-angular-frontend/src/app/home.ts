import { Component } from "@angular/core";

// other components
import { FormComponent } from "./formComponent";
import { TextComponent } from "./textComponent";

@Component({
    selector: 'home',
    template: `
        <h1> Hello there </h1>
        <app-text>{{message}}</app-text>
        <my-form (valueChange)="handleForm($event)"></my-form>
    `,
    imports: [FormComponent, TextComponent]
})
export class Home {
    message: string = ""
    handleForm(value: string): void {
        this.message = value
    }
}
