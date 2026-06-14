import { Component, /*input*/ } from '@angular/core';
// import { NgOptimizedImage } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

import { TopBar } from './topbar.component';

@Component({ // Main app component
    imports: [RouterOutlet, RouterLink, TopBar],
    selector: 'app-root',
    template: `
        <topbar></topbar>

        <router-outlet></router-outlet>
    `,
})
export class App {
}
