import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <h3>Edit {{childSelectedAnimal.name}} {{childSelectedAnimal.species}}</h3>
      <table class= "table">
        <thead>
          <th>Name</th>
          <th>Age</th>
          <th>Caretakers</th>
        </thead>
        <tbody>
          <td><input [(ngModel)]="childSelectedAnimal.name"></td>
          <td><input [(ngModel)]="childSelectedAnimal.age"></td>
          <td><input [(ngModel)]="childSelectedAnimal.careTakers"></td>
        </tbody>
      </table>
      <button class= "btn btn-warning" (click)="animalButtonClicked()">Done Editing Animal</button>
    </div>
  </div>

  `

})

export class AnimalEditComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() animalButtonClickedSender = new EventEmitter();

  animalButtonClicked(){
    this.animalButtonClickedSender.emit();
  }
}
