// without object

let title = "Where is the capital of India?";
let options = ["Patna","Simla","New Delhi"];
let correct = 2;

function isAnswerCorrect(correct){
    return correct == correct?true:false; 
};

function getCorrectAnswer(){
    return options[correct];
}

// Organize using Object 

let question1 = {
    title: "Where is the Capital of India?",
    options: ["Patna","Simla","New Delhi"],
    correct: 2,
    isAnswerCorrect(correct){
    return question1.correct == correct?true:false; 
},
    getCorrectAnswer(){
    return options[correct];
}
};

// function for creating Object

function creatQuestion(title,options,correct){
    let question = {};
    question.title = title;
    question.options = options;
    question.correct = correct;
    question.isAnswerCorrect = function(){
        return question.correct == correct?true:false; 
    };
    question.getCorrectAnswer = function(){
        return options[correct];
    };
    return question;
};

// Convert the function to use `this` keyword

function creatQuestion(title,options,correct){
    let question = {};
    question.title = title;
    question.options = options;
    question.correct = correct;
    question.isAnswerCorrect = function(correct){
        return this.correct == correct?true:false; 
    };
    question.getCorrectAnswer = function(){
        return this.options[this.correct];
    };
    return question;
};


let question1 = creatQuestion("what is Your name",["ritest","anish","sumit"],1);

let question2 = creatQuestion("How are You",["good","fine","not-well"],0);
