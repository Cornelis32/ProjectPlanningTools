import { Component, input } from '@angular/core';
import { CounterComponent } from './counterComponent';

// TODO: Get these components and classes their own files
// TODO: Go futher with the turtorial: https://angular.dev/tutorials/learn-angular/11-optimizing-images

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
    template: 'Welcome {{ user()?.username }}',
})
export class UserComponent {
    user = input<User>();
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
            @defer {
                @for (user of users.slice(1); track user.id;) {
                    <app-text> Other user {{ user.username }} exists </app-text>
                } 
            } @placeholder {
                <app-text> Some other people you might want to meet, will appear here </app-text>
            } @loading (minimum 2s) {
                <app-text> Fetching your future friends... </app-text>
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
        @for (hello of hellos; track hello) {
            <app-text> {{ hello }} </app-text>
        }
        <app-counter (incrementEvent)="setNum($event)"></app-counter>
        @defer (on viewport) {
        <app-text> The number is: {{ myNum }} </app-text>
        } @placeholder {
            <app-text> a number will appear here </app-text>
        } @loading (minimum 5s) {
            <app-text> Have some patience, dear user. The number will appear here soon... </app-text>
        }
    `,
    imports: [UserComponent, TextComponent, CounterComponent],
})
export class App {
    myNum: number = 0
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

    hellos: string[] = []

    // functions
    greet(): void {
        this.hellos = [...this.hellos, "hello"];
    }

    showOnHoverMessage(): void {
        this.message = "Click on this to add hello under here";
    }

    hideOnDishoverMessage(): void {
        this.message = ""
    }

    setNum(newNum: number): void {
        this.myNum = newNum
    }
}
