import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `

  <div class="well">
    <h1 id= "addHead">Add New Animal</h1>
    <table class="table">
      <tbody>
        <tr>
          <td><label>Species</label> <input #newAnimalSpecies></td>
          <td><label>Name</label> <input #newAnimalName></td>
          <td><label>Age</label> <input #newAnimalAge type="number"></td>
        </tr>
        <tr>
          <td> <label>Diet</label> <input #newAnimalDiet></td>
          <td><label>Location</label> <input #newAnimalLocation></td>
          <td><label>Caretakers</label> <input #newAnimalCaretakers type="number"></td>
        </tr>
        <tr>
          <td><label>Sex</label> <input #newAnimalSex></td>
          <td><label>Likes</label> <input #newAnimalLikes></td>
          <td><label>Dislikes</label> <input #newAnimalDislikes></td>
        </tr>
      </tbody>
      <button id="newButton" (click)="submitForm(newAnimalSpecies.value, newAnimalName.value, newAnimalAge.value, newAnimalDiet.value, newAnimalDiet.value, newAnimalLocation.value, newAnimalCaretakers.value, newAnimalSex.value, newAnimalLikes.value, newAnimalDislikes.value); newAnimalSpecies.value=''; newAnimalName.value='';  newAnimalAge.value=null; newAnimalDiet.value=''; newAnimalLocation.value=''; newAnimalCaretakers.value=null; newAnimalSex.value=''; newAnimalLikes.value=''; newAnimalDislikes.value='';" class= 'btn btn-info'>Add Animal</button>
    </table>
  </div>

  `
})


export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, careTakers: number, sex: string, likes: string, dislikes: string){
    let newAnimalToAdd: Animal = new Animal(species, name, age, diet, location,careTakers, sex, likes, dislikes);

    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
