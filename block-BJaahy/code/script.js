
class Square{
    constructor(side){
        this.width = side;
        this.height = side;
    }
    description(){
        alert`The squre is ${this.width} x ${this.height}`
    }
    calcArea(){
        return this.width * this.height;
    }
    get area(){
        return this.width * this.height;
    }
    set area(area){
        this.width = Math.sqrt(area);
        this.height = Math.sqrt(area);
    }


};
let s1 = new Square(6);
let s2 = new Square(7);
console.log(s1.area,s2.area);