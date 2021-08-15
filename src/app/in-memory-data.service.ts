import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', rating:4 , cost:500},
      { id: 12, name: 'Narco' , rating:2, cost:1000},
      { id: 13, name: 'Bombasto'  ,rating:9 , cost:1500},
      { id: 14, name: 'Celeritas' , rating:8 , cost:1200},
      { id: 15, name: 'Magneta', rating:9 , cost:500 },
      { id: 16, name: 'RubberMan', rating:2 , cost:500  },
      { id: 17, name: 'Dynama' , rating:6 , cost:1100 },
      { id: 18, name: 'Dr IQ' , rating:3, cost:200 },
      { id: 19, name: 'Magma', rating:8 , cost:1200  },
      { id: 20, name: 'Tornado', rating:9 , cost:2000  }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
