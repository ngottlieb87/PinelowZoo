import { Component } from '@angular/core';
import { Animal } from './animal.model'


@Component({
  selector: 'app-root',
  template: `
  <div class= 'container'>
    <h1 id="zooName">{{currentFocus}}</h1>

    <div id="animalList" class= "well">
      <h2 id="listHead">Animals</h2>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      <animal-edit [childSelectedAnimal]="selectedAnimal" (animalButtonClickedSender)="finishedEditing()"></animal-edit>
    </div>
  </div>

  `
})
  export class AppComponent{
    currentFocus: string = 'Pinelow Zoo Animal Tacker';
    selectedAnimal=null;
    masterAnimalList: Animal[]= [
      new Animal('Aligator', 'Bitey', 4, 'Carnivore', 'Reptile Building', 3, 'Female', 'Laying under heatlamp', 'Tapping on the glass'),
      new Animal('Zebra', 'Newspaper', 8, 'Herbivore', 'Animals of Africa', 6, 'Male', 'Racing other zebras', 'The Elephants'),
      new Animal('Badger', 'Stripes', 2, 'Omnivore', 'Small Furry Building', 2, 'Male', 'Playing with the red ball', 'Hot weather'),
      new Animal('Brown Bear', 'Samson', 12 , 'Omnivore', 'Large Beasts', 5, 'Female', 'Frozen Fishcilcles', 'Loud noises')
    ];

    addAnimal(newAnimalFromChild: Animal){
      this.masterAnimalList.push(newAnimalFromChild);
    }

    editAnimal(clickedAnimal){
      this.selectedAnimal = clickedAnimal;
    }
    finishedEditing(){
      this.selectedAnimal = null;
    }
  }
