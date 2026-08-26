import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyGlobals } from '../globals';

@Component({
  selector: 'topbar',
  template: `
    <div class="topbar" [style.height.vh]="topbarHeight">
        <nav>
            <a routerLink="" class="target">Home</a>
            |
            <a routerLink="training/">Training stuff</a>
        </nav>
    </div>
              `,
  styles: `
    .topbar {
      background-color: darkgrey;
      position: fixed;
      top: 0;
      width: 100%;
      height: 4%;
      z-index: 1000;
    }
    .target {
      background-color: green;
    }
  `,
  imports: [RouterLink],
})
export class TopBar {
    topbarHeight: number = MyGlobals.topbarHeight;
}
