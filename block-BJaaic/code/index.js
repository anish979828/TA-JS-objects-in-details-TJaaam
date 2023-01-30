// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()- log a message saying `I live in ${location} and I can eat`
// - `changeLocation(newLocation)` - accepts location and updates the location of the animal
// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`


function createAnimal(location,numberOfLegs){
    let obj = Object.create(animalMethods);
    obj.location = location;
    obj.numberOfLegs = numberOfLegs;
    return obj;
}

let animalMethods = {
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation(newLocation){
        this.location = newLocation;
    },
    summary(){
        return `i live in ${this.location} and I have ${this.numberOfLegs} legs`;
    }
};

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

function createDog(location,numberOfLegs,name,color){
    let obj = createAnimal(location,numberOfLegs);
    Object.setPrototypeOf(obj,dogMethods);
    obj.name = name;
    obj.color = color;
    return obj;
};

let dogMethods = {
    bark: function(){
        alert(`I am ${this.name} and I can bark🐶`)
    },
    changeName: function(newName){
        this.name = newName;
    },
    changeColor: function(newColor){
        this.color = newColor;
    },
    summary: function(){
        console.log(`I am ${this.name} and I am of ${this.color} color. i can also bark
        bark`)
    }
};
Object.setPrototypeOf(dogMethods,animalMethods);

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

function createCat(location,noOfLegs,name,colorOfEyes){
    let obj = createAnimal(location,noOfLegs);
    Object.setPrototypeOf(obj,catMethods)
    obj.name = name;
    obj.colorOfEyes = colorOfEyes;
    return obj;
};
let catMethods = {
    meow(){
        alert(`I am ${this.name} and I can do meow`)
    },
    changeName(newName){
        this.name = newName;
    },
    changeColorOfEyes(newColor){
      this.color = newColor;   
    },
    summary(){
        console.log(`I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can do meow meow`)

    }
};
Object.setPrototypeOf(catMethods,animalMethods);




