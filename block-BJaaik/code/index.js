// ## Create Class

// Convert the given image into class using inheritance.

// - `name` is the property
// - `eat()` is the method

// Property ending with `()` is method. And others are properties.

// ![Inheritance](../assets/inheritance.png)

class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        return `${this.name} can eat`
    }
    sleep(){
        return `${this.name} can sleep`
    }
    walk(){
        return `${this.name} can walk `
    }
};

class Player extends Person{
    constructor(name,age,gender,sportsName){
        this.sportsName = sportsName;
        super(name,age,gender);
    }
    play(){
        return `${this.name} can play`
    }
};
class Cricketer{
    constructor(name,age,gender,sportsName,teamName){
        this.teamName = teamName;
        super(name,age,gender,sportsName)
    };
    playCricket(){
        return `${this.name} can play cricket`
    }
}

class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        this.instituteName =instituteName;
        super(name,age,gender);
    };
    teach(){
        return `${this.name} can teach also.`
    }
};

class Artist extends Person{
    constructor(name,age,gender,kind){
        this.kind = kind;
        super(name,age,gender);
    }
    createArt(){
        return `${this.name} can createArt also.`

    }
};
