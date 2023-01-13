// - [ ] Using function to create object

// function createUser(name,id,noOfProjects,getProjects,changeName,incrementProjects,decrementProjects){
//     let obj = {};
//     obj.name = name;
//     obj.id = id;
//     obj.noOfProjects = noOfProjects;
//     obj.getProjects =function(){
//         return obj.noOfProjects;
//     },
//     obj.changeName = function(newName){
//         return this.name;
//         this.name = newName;
      
//     },
//     obj.incrementProjects = function(){
//        this.noOfProjects--;
//         return this.noOfProjects;

//     },
//     obj.decrementProjects = function(){
//         this.noOfProjects++;
//         return this.noOfProjects;
//     }
//     return obj;
// };

// - [ ] Using Object.create (prototypal pattern);

// function createUser(name,id,noOfProjects){
//     let obj = Object.create = (userMethod);
//     obj.name = name;
//     obj.id = id;
//     obj.noOfProjects = noOfProjects;
//     return obj;
// };

// let userMethod = {
//     getProjects: function(){
//         return this.noOfProjects;
//     },
//     changeName: function(Newname){
//         return this.name;
//         this.name = Newname; 
//     },
//     incrementProjects: function(){
//          this.noOfProjects++;
//          return this.noOfProjects;

//     },
//     decrementProjects: function (){
//         this.noOfProjects--;
//         return this.noOfProjects;
      
//     }
// };

// - [ ] Using Pseudoclassical Way

// function CreateUser(name,id,noOfProjects){
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
// };
// CreateUser.prototype = {
    // getProjects: function(){
    //     return this.noOfProjects;
    // },
    // changeName: function(Newname){
    //     return this.name;
    //     this.name = Newname; 
    // },
    // incrementProjects: function(){
    //      this.noOfProjects++;
    //      return this.noOfProjects;

    // },
    // decrementProjects: function (){
    //     this.noOfProjects--;
    //     return this.noOfProjects;
      
    // }
// };

// - [ ] Using Class
class user {
    constructor(name,id,noOfProjects){
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    };
    getProjects(){
        return this.noOfProjects;
    }
    changeName(Newname){
        return this.name;
        this.name = Newname; 
    }
    incrementProjects(){
         this.noOfProjects++;
         return this.noOfProjects;

    }
    decrementProjects (){
        this.noOfProjects--;
        return this.noOfProjects;
      
    }
};





//TEST"
let user1 = new user("Anish",1234,2);
let user2 = new user("ritesh",12,5);

console.group("Anish");
console.log(user1.name);
console.log(user1.id);
console.log(user1.noOfProjects);
console.log(user1.changeName("sumit"));
console.log(user1.decrementProjects());
console.log(user1.incrementProjects());
console.groupEnd();

console.group("Ritesh");
console.log(user2.name);
console.log(user2.id);
console.log(user2.noOfProjects);
console.log(user2.changeName());
console.log(user2.decrementProjects());
console.log(user2.incrementProjects());
console.groupEnd();





