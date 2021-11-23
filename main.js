x=0;
y=0;
draw_triangle="";
draw_circle="";
draw_rectangle="";
draw_square="";

var SpeechRecognition =window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML="System is Listening Please Speak";
    recognition.start();
}

function setup() {
    canvas=createCanvas(920 , 550);
    
}

recognition.onresult=function (event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="Speech has been recognized as : " + content ;

    if (content == "circle") {
        x = Math.floor(Math.random() * 920);
        y=Math.floor(Math.random() * 550);
        document.getElementById("status").innerHTML=" started drawing circle";
        draw_circle="set";

    } 

    if (content == "Triangle") {
        x = Math.floor(Math.random() * 920);
        y=Math.floor(Math.random() * 550);
        document.getElementById("status").innerHTML=" started drawing triangle";
        draw_triangle="set";

    }

    if (content == "rectangle") {
        x = Math.floor(Math.random() * 920);
        y=Math.floor(Math.random() * 550);
        document.getElementById("status").innerHTML=" started drawing rectangle";
        draw_rectangle="set";

    }

    if (content == "square") {
        x = Math.floor(Math.random() * 920);
        y=Math.floor(Math.random() * 550);
        document.getElementById("status").innerHTML=" started drawing square";
        draw_square="set";

    }
}

function draw() {
    if (draw_circle == "set") {
        circle(x , y , 100);
        document.getElementById("status").innerHTML=" circle drawn";
        draw_circle="";
    }

    if (draw_triangle == "set") {
        triangle(x, y, x + 80 , y , x + 40, y-80);
        document.getElementById("status").innerHTML=" triangle drawn";
        draw_triangle="";
    }

    if (draw_rectangle == "set") {
        rect(x,y ,150 , 80);
        document.getElementById("status").innerHTML=" rectangle drawn";
        draw_rectangle="";
    }

    if (draw_square == "set") {
        rect(x,y ,100 , 100);
        document.getElementById("status").innerHTML=" square drawn";
        draw_square="";
    }
}


