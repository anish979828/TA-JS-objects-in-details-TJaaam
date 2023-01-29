
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
        this.noOfTimes = 0;
    }
    description(){
        alert`The squre is ${this.width} x ${this.height}`
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        this.noOfTimes++;
        if(this.noOfTimes >= 4){
            alert(`Upper Limit Reached`);
        }else{
            return this.width * this.height;
        }
      
    }
    set area(area){
        this.width = Math.sqrt(area);
        this.height = Math.sqrt(area);
    }
    static isEqual(s1,s2){
        return (s1.area) === (s2.area); 
    }

};
let s1 = new Square(6);
let s2 = new Square(7);
console.log(s1.area,s2.area);

class User {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    set fullName(fullName){
        if(fullName.length < 5){
            alert(`Full name should be more than 5 characters`)
        }else{
            let first = fullName.split(" ")[0];
            this.firstName = first;
            let last = fullName.split(" ")[1];
            this.lastName = last;
        }
    }
    nameContains(str){
        return `${this.firstName} ${this.lastName}`.includes(str);
    }
};
let U1 =  new User("Anish" , "Giri");
let U2 =  new User("Ritesh" , "Goswami");

