import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'topbar',
  template: `<div class="topbar">
    <nav>
      <a routerLink="" class="target">Home</a>
      |
      <a routerLink="training/">Training stuff</a>
    </nav>
  </div>`,
  styles: `
    .topbar {
      background-color: darkgrey;
    }
    .target {
      background-color: green;
    }
  `,
  imports: [RouterLink],
})
export class TopBar {}
