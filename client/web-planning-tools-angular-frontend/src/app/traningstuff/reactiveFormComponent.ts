import { Component, output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'my-reactive-form',
    template: `
        <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
            <p><label> Name
                <input type="text" formControlName="name" />
            </label></p>
            <p><label> Email
                <input type="email" formControlName="email"/>
            </label></p>
            <p><button type="submit" [disabled]="!profileForm.valid" >Submit</button></p>
        </form>
    `,
    styles: `
        p {
            color: black;
        }
    `,
    imports: [ReactiveFormsModule],
})
export class ReactiveFormComponent {
    nameUpdateEvent = output<string>();
    emailUpdateEvent = output<string>();
    profileForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
    })

    handleSubmit(): void {
        this.nameUpdateEvent.emit(this.profileForm.value.name ?? "No name provided");
        this.emailUpdateEvent.emit(this.profileForm.value.email ?? "No email provided");
    }
}
