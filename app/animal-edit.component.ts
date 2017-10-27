import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `
    <div *ngIf="childSelectedAnimal">
      <div class= "well">
        <h2 id="editHead">Edit {{childSelectedAnimal.name}}</h2>
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
        <button id="editButton" class= "btn btn-warning" (click)="animalButtonClicked()">Done Editing {{childSelectedAnimal.name}}</button>
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
