// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)

// function createQuestion(title,options,correctAnswerIndex){
//     let obj = Object.create(questionMethod);
//     obj.title = title;
//     obj.options = options;
//     obj.correctAnswerIndex = correctAnswerIndex;
//     return obj;
// };


// let questionMethod = {
//     isAnswerCorrect: function(correct){
//         return this.correctAnswerIndex == correct ? true : false; 
//     },
//     getCorrectAnswer: function (){
//         return this.options[this.correctAnswerIndex];

//     }
// };
   
// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)

// function CreateQuestion(title,options,correctAnswerIndex){
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;
// };

// CreateQuestion.prototype = {
//     isAnswerCorrect: function(correct){
//         return this.correctAnswerIndex == correct ? true : false; 
//     },
//     getCorrectAnswer: function (){
//         return this.options[this.correctAnswerIndex];
//     }
// };

// creating object using class 


class question {

    constructor (title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }

    isAnswerCorrect(correct){
        return this.correctAnswerIndex == correct ? true : false;
    }

    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}

// TEST
let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

