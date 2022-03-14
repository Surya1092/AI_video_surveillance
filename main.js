var objects = [];
var status = "";

function preload(){
    video = createVideo('video.mp4');
}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}

function start(){
    object_detector = ml5.objectDetector('cocossd', modelLoaded());
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded(){
    console.log("Model Is Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(1);
}