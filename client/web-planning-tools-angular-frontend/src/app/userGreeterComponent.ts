import { Component, input } from '@angular/core';

import { TextComponent } from './textComponent';

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
    selector: 'user-greeter',
    template: `
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
    }`,
    imports: [UserComponent, TextComponent]
})
export class UserGreeterComponent {
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
}
