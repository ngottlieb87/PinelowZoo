import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'diet',
  pure: false
})

export class DietPipe implements PipeTransform{
  transform(input: Animal[], diet){
    let output: Animal[] = [];

    if(diet === "herbivore"){
      for(let i=0; i<input.length; i++){
        if(input[i].diet === "Herbivore"){
          output.push(input[i]);
        }
      }
      return output;
    }else if(diet === "carnivore"){
      for(let i=0; i<input.length; i++){
        if(input[i].diet === "Carnivore"){
          output.push(input[i]);
        }
      }
      return output;
    }else if(diet === "omnivore"){
      for(let i=0; i<input.length; i++){
        if(input[i].diet === "Omnivore"){
          output.push(input[i]);
        }
      }
      return output;
    } else if(diet === "allAnimals"){
      for(let i=0; i<input.length; i++){
        if(input[i].age > 0){
          output.push(input[i]);
        }
      }
      return output;
    }
      else {
        return input;
    }
  }
}
