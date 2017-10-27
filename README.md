# _Pinelow Zoo Animal Sorter_
### Created By _Noah Gottlieb_

## Description

Pinelow Zoo was in need of a new animal input system that could allow workers to keep track of their animals and assign caretakers accordingly. As an employee you can enter their species, name, age, diet, sex, number of care takers needed, where the animal is located in the park, and their likes/dislikes.


## Setup

1. open terminal navigate to desired download location (ex. `cd desktop`) and enter: </br>`git clone https://github.com/ngottlieb87/PinelowZoo.git`

2. Navigate to the root of the project directory and enter the next commands into the terminal:
  * `npm install`
  * `bower install` ** if you do not have bower installed run command: `bower install -g` first
  * `gulp build`

3. To launch the application type the command while in the root directory:
  <br>`gulp serve`

## Specs

| Behavior    |  Input        | Output |
| :------------- |:-------------| :-----|
| Add a new animal to Pinelow Zoo | Alligator, Jeff, 12, Reptile Building, 7, Scratches under his chin, Thunder   | _Information added to table in desired Columns(Species, Name, Age, Location, Caretakers, Likes, Dislikes)_
|  Edit existing animal | _Click edit button next to Jeff and change name to Charles_ | Alligator, Charles, 12, Reptile Building, 7, Scratches under his chin, Thunder |
| Filter by age | _Select Animals Younger than 2 years old_ | _Display only animals who's age is 2 or younger_ |
| Filter by diet | _Select animals diet: Carnivore_ | _Display only animals that eat meat_ |


## Languages/Frameworks Used:

  ###### _Javascript, Typescript, CSS, Bootstrap, NPM, Gulp_

## Screenshots:
_Default Page_
![Picture of Default Page](/resources/images/default.png)


_Edit Menu_
![Picture of Edit Menu](resources/images/editZoo.png)
