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

function draw(){
    image(video ,0 ,0, 480, 380);
    if (status != "") {
        object_detector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++){
            document.getElementById("ststus").innerHTML = "Status : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number Of Objects Detected Are : " + objects.length;

            fill("#ff0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#0000ff");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height); 
        }
    }
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}