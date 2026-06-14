import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { CounterComponent } from './counterComponent';
import { TextComponent } from './textComponent';
import { Home } from './home';
import { UserGreeterComponent } from './userGreeterComponent';

// TODO: Get these components and classes their own files
// TODO: Go futher with the turtorial: https://angular.dev/tutorials/learn-angular/11-optimizing-images

@Component({
  // Main app component
  selector: 'app-root',
  template: `
    <div [contentEditable]="isEditable"></div>
    <app-text>
        <button
          (click)="greet()"
          (mouseover)="showOnHoverMessage()"
          (mouseout)="hideOnDishoverMessage()"
        >
          Click me!
        </button>
        {{ message }}
    </app-text>
    @for (hello of hellos; track hello) {
      <app-text> {{ hello }} </app-text>
    }
    <app-counter (incrementEvent)="setNum($event)"></app-counter>
    @defer {
      <app-text> The number is: {{ myNum }} </app-text>
    } @placeholder {
      <app-text> a number will appear here </app-text>
    } @loading (minimum 5s) {
      <app-text> Have some patience, dear user. The number will appear here soon... </app-text>
    }
    <ul>
      <li>
        Normal image: <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" priority />
      </li>
    </ul>

    <app-text>
      Where originally links, but navigation is now something different. I don't know about multiple
      router-outlet stuff, so we do this now :)</app-text
    >

    <home></home>
    <user-greeter></user-greeter>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    TextComponent,
    CounterComponent,
    NgOptimizedImage,
    RouterOutlet,
    RouterLink,
    Home,
    UserGreeterComponent,
  ],
})
export class Training {
  logoUrl: string = '/favicon.ico';
  logoAlt: string = 'Angular icon';

  myNum: number = 0;
  message: string = ''; // empty, is onhover message
  isEditable: boolean = false;

  hellos: string[] = [];

  // functions
  greet(): void {
    this.hellos = [...this.hellos, 'hello'];
  }

  showOnHoverMessage(): void {
    this.message = 'Click on this to add hello under here';
  }

  hideOnDishoverMessage(): void {
    this.message = '';
  }

  setNum(newNum: number): void {
    this.myNum = newNum;
  }
}
