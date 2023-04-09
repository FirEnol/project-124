function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);
        canvas = createCanvas(800,400);
        canvas.position(430,130);

        poseNet = ml5.poseNet(video,modelDone);
        poseNet.on('pose',gotposes);
}
function draw(){
    background("#5196e3");
}
function modelDone(){
    console.log("Posenet Is initialized And Loaded");

}
function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightwrist.y);
        console.log("lefttWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftwrist.y);
    }
}