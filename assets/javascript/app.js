
//function to make question objects.

function Question(q,cArray,a) {
    this.question = q;

    this.choices = cArray;

    this.answer = a;
}
//question objects.

var first= new Question("What three colors of light can create any color in the visible spectrum when shown together?",
["Red, Yellow, Blue",
"Orange, Green, Violet",
"Red, Green, Blue",
"Cyan, Magenta, Yellow"], "3");

var second = new Question("What are the primary subtractive colors used for printing?",
["Red, Green, Blue",
"Cyan, Magenta, Yellow, Black",
"Red, Yellow, Blue",
"Orange, Green, Purple"],"2");

var third = new Question("What color of light are humans most sensitive to?",
["Orange","Red","Green","Blue"],"3");

var fourth = new Question("Red, Orange, and Yellow are all _____ colors",
["Primary", "Balanced", "Bright", "Warm"],"4");

var fifth = new Question("The position of a color on a rainbow or color wheel is its:",
["Hue","Value","Type","ID"], "1")

var sixth = new Question("The lightness or darkness of a color is its:",
["Saturation","Value","Chroma","Intensity"], "2")

var seventh = new Question("Intense, vivid colors have high ______ while dull, muted colors have low _______",
["Brightness","Balance","Saturation","Tone"], "3")

var eighth = new Question("The hexa-decimal code #66aa88 would make approximately what color?",
["A Neon Lime Green", "A Yellowish Orange", "A Muted Turquoise", "Just Purple"], "3")

score = 0;

qArray = [first, second, third, fourth, fifth, sixth, seventh, eighth];

maxScore = qArray.length;

currentQ = 0;

chosen = false;

timerSeconds = 10;

timerTenths = 0;

var timerInterval;

//loads the current question.

function loadQuestion(obj) {
    timerSeconds = 10;

    timerTenths = 0;

    $("#question").text(obj.question)

    $("#c-1").text(obj.choices[0])

    $("#c-2").text(obj.choices[1])

    $("#c-3").text(obj.choices[2])

    $("#c-4").text(obj.choices[3])

    $("#timer").text(timerSeconds + "." + timerTenths)

    timerInterval = setInterval(function(){
        timerTenths--

        if(timerTenths === 0 && timerSeconds ===0){
            clearInterval(timerInterval)

            $(".choice").each(function(){
                if($(this).attr("data-number") === qArray[currentQ].answer)
                    $(this).css("background","#226622")
            })

            chosen = true;

            $("#next").show();

        }

        if(timerTenths < 0){
            timerTenths = 9

            timerSeconds--
        }

        $("#timer").text(timerSeconds + "." + timerTenths)
    }, 100)
}

loadQuestion(qArray[currentQ]);

$("#next").hide();

$("#score").text("Score: " + score + " / " + maxScore)

//graphics for hovering over buttons.

$(".choice").mouseenter(function(){
    if(!chosen){
        $(this).css("background","#331166");
        $(this).css("cursor","pointer");
    }
    else
        $(this).css("cursor","default");
})

$(".choice").mouseleave(function(){
    if(!chosen)
        $(this).css("background","#553388");
})

$("#next").mouseenter(function(){
    $(this).css("background","#553311");
    $(this).css("cursor","pointer");
})

$("#next").mouseleave(function(){
    $(this).css("background","#885533");
})

//Clicking on a choice.

$(".choice").click(function(){
    if(!chosen){
        clearInterval(timerInterval)

        chosen = true;

        $("#next").show();

        console.log($(this).attr("data-number"))

        if($(this).attr("data-number") === qArray[currentQ].answer)
        {
            score++
            $("#score").text("Score: " + score + " / " + maxScore)

            $(this).css("background","#226622")


        }
        else
        {
            $(this).css("background","#662222")

            $(".choice").each(function(){
                if($(this).attr("data-number") === qArray[currentQ].answer)
                    $(this).css("background","#226622")
            })
        }
    }
});

//click on the next question button and go to the next question.
$("#next").click(function(){
    if(currentQ + 1 !== qArray.length){
        currentQ++

        loadQuestion(qArray[currentQ]);

        $(".choice").css("background","#553388");
        

        chosen = false;

        $(this).hide()
    }
})

