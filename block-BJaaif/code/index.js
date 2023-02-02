/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/
// Create a function that accepts two inputs (name and age) and returns an object. Let's call this function `makePerson`. This function will:

// 1. create an empty object
// 2. add a `name` property to the newly created object with its value being the 'name' argument passed into the function
// 3. add an `age` property to the newly created object with its value being the 'age' argument passed into the function
// 4. return the object

function makePerson(name, age) {
  let obj = {name: name,age:age};
  return obj;
}

var vicky = makePerson('Vicky', 24);

/********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
// Inside `personStore` object, create a property `greet` where the value is a function that logs "hello".

var personStore = {
  greet(){
    console.log(`hello`);
  }
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  let obj = Object.create(personStore);
  obj.name = name;
  obj.age = age;
  return obj;
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

personStore.introduce = function (){
  console.log(`Hi, my name is Sandra`);
}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor() {

};
PersonConstructor.prototype = {
  greet(){
    alert (`Hello`);
  }
};


// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function PersonFromConstructor(name, age) {
  this.name = name;
  this.age = age;
}

PersonFromConstructor.prototype = {
  greet(){
    console.log(`hello`);
  }
}

var mike = new PersonFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

PersonFromConstructor.prototype.introduce = function(){
  console.log(`Hi my name is ${this.name}`)
}


// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor() {
    
  }
  greet(){
    console.log(`hello`);
  }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

class DeveloperClass {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  introduce(){
    console.log(`Hello World, my name is Thai`);
  }
}



// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function () {
    console.log('I am a ' + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = {
  sayType(){
    `I am a Admin`
  },
  sharePublicMessage(){
    `Welcome users!`
  }
};

function adminFactory(name, score) {
  let admin = Object.create(adminFunctionStore);
  this.name =  name;
  this.score =  score;
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
