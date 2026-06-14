import { Routes } from '@angular/router';

// components
// note: lot of relative imports
import { DashboardComponent } from './dashboard.component';
import { Training } from './traningstuff/traning';
import { Home } from './traningstuff/home';

// okay, routing
// imma make some notes here, since I probably will forget how this works

export const routes: Routes = [
    {
        path: '',
        title: 'Ze home page',
        component: DashboardComponent,
    },
    {
        path: 'training',
        title: 'stuff I did while training',
        component: Training
    },
    {
        path: 'training-home',
        component: Home
    }
];
