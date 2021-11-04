sound = ""
function preload(){
    sound = loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500 )
    canvas.center()
    video =createCapture(VIDEO);
    video.hide()

}
function start(){
    sound.play();
}
function draw(){
    image(video,0,0,600,500);
}