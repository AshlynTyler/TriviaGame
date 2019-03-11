
//function to make question objects.

function Question(q,cArray,a) {
    this.question = q;

    this.choices = cArray;

    this.answer = a;
}
//question objects.

var testQuestion = new Question("What is 2+2?",
["2","3","4","8"],3);

score = 0;

Qarray = [testQuestion];

currentQ = 0;



function loadQuestion(obj) {
    $("#question").text(obj.question)

    $("#c-1").text(obj.choices[0])

    $("#c-2").text(obj.choices[1])

    $("#c-3").text(obj.choices[2])

    $("#c-4").text(obj.choices[3])
}

console.log(Qarray[currentQ]);

loadQuestion(Qarray[currentQ]);