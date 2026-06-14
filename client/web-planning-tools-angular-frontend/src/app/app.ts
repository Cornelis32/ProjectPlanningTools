import { Component, ChangeDetectionStrategy } from '@angular/core';
// import { NgOptimizedImage } from "@angular/common";
import { RouterOutlet } from '@angular/router';

import { TopBar } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyGlobals } from './globals';

@Component({
  // Main app component
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <topbar></topbar>
    <div [style.margin-top.%]="topOffset">
    <sidebar></sidebar>
    <div [style.margin-left.%]="mainContentOffset">
        <router-outlet></router-outlet>
    </div>
    </div>
  `,
  styles: ``,
  imports: [RouterOutlet, TopBar, SidebarComponent],
})
export class App {
    mainContentOffset: number = MyGlobals.sideBarWidthPercentage + 1;
    topOffset: number = 0.5;
}
