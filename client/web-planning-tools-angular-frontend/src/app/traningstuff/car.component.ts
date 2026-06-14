import { Component, inject } from '@angular/core';

import { CarService } from './car.service';

@Component({
    selector: 'my-car',
    template: `<p>Cars: {{ display }}</p>`,
})

export class CarComponent {
    carService: CarService = inject(CarService); 
    display: string = this.carService.getCars().join(' * ');
}
