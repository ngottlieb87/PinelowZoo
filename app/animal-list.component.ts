import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component ({
  selector: 'animal-list',
  template: `

  <label>Filter By Age</label>
  <select (change)='onChange($event.target.value)'>
    <option value="underTwo">Under Age 2</option>
    <option value= "overTwo">Over Age 2</option>
    <option value= "allAges" selected="selected">All Animals</option>
  </select>

  <label id="dietLabel">Filter By Diet</label>
  <select (change)='onChangeDiet($event.target.value)'>
    <option value= "herbivore">Herbivore</option>
    <option value="carnivore">Carnivore</option>
    <option value="omnivore">Omnivore</option>
    <option value = "allAnimals" selected= "selected">All Animals</option>
  </select>

  <table class = 'table'>
    <thead>
      <tr>
        <th>Species</th>
        <th>Name</th>
        <th>Age</th>
        <th>Diet</th>
        <th>Location</th>
        <th>Caretakers</th>
        <th>Sex</th>
        <th>Likes</th>
        <th>Dislikes</th>
      </tr>
    </thead>
    <tbody>
    <tr *ngFor = 'let animal of childAnimalList | age:filterByAge | diet:filterByDiet'>
      <td>{{animal.species}}</td>
      <td>{{animal.name}}</td>
      <td>{{animal.age}}</td>
      <td>{{animal.diet}}</td>
      <td>{{animal.location}}</td>
      <td>{{animal.careTakers}}</td>
      <td>{{animal.sex}}</td>
      <td>{{animal.likes}}</td>
      <td>{{animal.dislikes}}</td>
      <td><button class = "btn btn-primary" (click)="editButtonClicked(animal)">Edit Animal</button></td>
    </tr>
    </tbody>
  </table>

  `
})

export class AnimalListComponent{
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAges";
  filterByDiet: string = "allAnimals";
  editButtonClicked(animalToEdit, Animal){
    this.clickSender.emit(animalToEdit);
  }

  onChange(optionFromMenu){
    this.filterByAge = optionFromMenu;
  }

  onChangeDiet(optionFromMenu){
    this.filterByDiet = optionFromMenu;
  }
}
