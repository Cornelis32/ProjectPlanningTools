import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CarService {
    cars = ['Toyota Prius', 'BMW M5', 'Audi A8'];

    getCars(): string[] {
        return this.cars;
    }

    getCar(id: number): string {
        return this.cars[id]
    }

    getId(car: string): number {
        return this.cars.indexOf(car)
    }
}
