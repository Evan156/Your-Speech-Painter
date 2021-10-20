x = 0;
y = 0;

draw_circle = "";
draw_rect = "";

function setup() {

    Canvas = createCanvas(900, 600); // creating a canvas

}

var SpeechRecognition = window.webkitSpeechRecognition; //API  = convert S to T
var recognition = new SpeechRecognition(); //creating a new API

function start() {

    document.getElementById("status").innerHTML = "I am listening , Speak User"
    recognition.start() //convert S to T

}




recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle ";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle ";
        draw_rect = "set";
    }
}

function draw() {

    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn. ";
        draw_circle = "";
    }
    if (draw_rect == "set") {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn. ";
        draw_rect = "";
    }


}