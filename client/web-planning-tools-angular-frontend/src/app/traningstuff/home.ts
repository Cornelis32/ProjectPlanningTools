import { Component } from "@angular/core";

// other components
import { TextComponent } from "./textComponent";
import { ReactiveFormComponent } from "./reactiveFormComponent";    

@Component({
    selector: 'home',
    template: `
        <h1> Hello there </h1>
        <app-text>Submitted name: {{formName}}</app-text>
        <app-text>Submitted email: {{formEmail}}</app-text>
        <my-reactive-form (nameUpdateEvent)="updateFormName($event)" (emailUpdateEvent)="updateFormEmail($event)"></my-reactive-form>
    `,
    imports: [TextComponent, ReactiveFormComponent]
})

export class Home {
    formName: string = ""
    formEmail: string = ""

    message: string = ""

    updateFormName(name: string): void {
        this.formName = name
    }

    updateFormEmail(email: string): void {
        this.formEmail = email
    }

    showMessage() {
        // alert is very basic
        alert(this.message)
    }
}
