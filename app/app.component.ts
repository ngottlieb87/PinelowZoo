import { Component } from '@angular/core';
import { Animal } from './animal.model'


@Component({
  selector: 'app-root',
  template: `
  <div class= 'container'>
    <h1>{{currentFocus}}</h1>

    <div id="animalList" class= "well">
      <h3>Animals</h3>
      <animal-list [childAnimalList]="masterAnimalList"></animal-list>
    </div>

  </div>

  `
})
  export class AppComponent{
    currentFocus: string = 'Pinelow Zoo Animal Tacker';

    masterAnimalList: Animal[]= [
      new Animal('Aligator', 'Bitey', 4, 'Carnivore', 'Reptile Building', 3, 'Female', 'Laying under heatlamp', 'Tapping on the glass'),
      new Animal('Badger', 'Stripes', 2, 'Omnivore', 'Small Furry Building', 2, 'Male', 'Playing with the red ball', 'Hot weather'),
      new Animal('Brown Bear', 'Samson', 12 , 'Omnivore', 'Large Beasts', 5, 'Female', 'Frozen Fishcilcles', 'Loud noises')
    ]
  }
