import { Component } from '@angular/core';
import { MyGlobals } from '../globals';


@Component({
    selector: 'sidebar',
    template: `
        <div class="sidenav" [style.width.%]="sidebarSize">
            <p> Side controls should end up here. A bit of long text to see if it stays where it needs to be</p>
        </div>
    `,
    styles: `
        .sidenav {
            display: flex;
            height: 100%;
            position: fixed;
            z-index: 1;
            left: 0;
            background-color: rosybrown;
            overflow-x: hidden;
            padding-top: 20px;
            padding-left: 0.5%;
        }

        @media screen and (max-height: 450px) {
            .sidenav {
                padding-top: 15px;
            }
        }
    `,
})
export class SidebarComponent {
    sidebarSize: number = MyGlobals.sideBarWidthPercentage;
}
