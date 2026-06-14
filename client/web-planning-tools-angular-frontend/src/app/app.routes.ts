import { Routes } from '@angular/router';

// components
// note: lot of relative imports
import { Home } from './home';
import { UserGreeterComponent } from './userGreeterComponent';

// okay, routing
// imma make some notes here, since I probably will forget how this works

export const routes: Routes = [
    {
        path: '',
        title: 'Ze home page',
        component: Home,
    },
    {
        path: 'user',
        title: 'Hi user',
        component: UserGreeterComponent,
    }
];
