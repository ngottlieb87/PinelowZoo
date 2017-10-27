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
| ------------- |:-------------:| -----:|
| Add a New Animal to Pinelow Zoo | Alligator, Jeff, 12, Reptile Building, 7, Scratches under his chin, Thunder   | _Information added to table in desired Columns(Species, Name, Age, Location, Caretakers, Likes, Dislikes)_
|  Edit Existing animal | _click edit button next to Jeff and change name to Charles_ | Alligator, Charles, 12, Reptile Building, 7, Scratches under his chin, Thunder |
| Filter By Age | _Select Animals Younger than 2 years old | _display only animals who's age is 2 or younger_ |
| Filter By Diet | _Select Animals Diet: Carnivore_ | _display only animals that eat meat_ |


## Languages/Frameworks Used:

  ###### _Javascript, Typescript, CSS, Bootstrap, NPM, Gulp_

## Screenshots:
_Default Page_
![Screen Shot](/Users/Guest/desktop/localZoo/resources/images/Edit Zoo.png)


_Edit Menu_
![Screen Shot](/Users/Guest/desktop/localZoo/resources/images/Default.png)
