import { Component, Input } from '@angular/core';

export class User {
    id: number;
    username: string;
    constructor(id: number, username: string) {
        this.id = id
        this.username = username
    }
}
@Component({
    selector: 'app-user',
    template: 'Welcome {{ user?.username }}',
})
export class UserComponent {
    @Input() user?: User;
}

@Component({
    selector: 'app-text',
    template: '<p><span class="tag"><ng-content/></span></p>',
})
export class TextComponent{ }

@Component({ // Main app component
    selector: 'app-root',
    template: `
        <div [contentEditable]="isEditable"></div>
        @if (loggedIn) {
            <app-text>
                    <app-user [user]=users[0]>
                    </app-user>
            </app-text>
            @for (user of users.slice(1); track user.id;) {
                <app-text> Other user {{ user.username }} exists </app-text>
            }
        } @else {
            <app-text> You are not supposed to be here </app-text>
        }
        <button 
            (click)="greet()" 
            (mouseover)="showOnHoverMessage()" 
            (mouseout)="hideOnDishoverMessage()">
                Click me!
        </button>
        <app-text>{{ message }}</app-text>
    `,
    imports: [UserComponent, TextComponent],
})
export class App {
    message: string = ''; // empty, is onhover message
    isEditable: boolean = false
    loggedIn: boolean = true
    users: Array<User> = [
        new User(0, "John Doe"),
        new User(1, "Johanna Doe"),
        new User(2, "Amy Doe"),
        new User(3, "Rachel Doe"),
        new User(4, "Sarah Doe"),
        new User(5, "Job Doe"),
        new User(6, "Piet Doe"),
    ]

    // functions
    greet(): void {
        console.log('Hello world');
    }

    showOnHoverMessage(): void {
        this.message = "Look in the console (developer tools) to see the button action";
    }

    hideOnDishoverMessage(): void {
        this.message = ""
    }
}
