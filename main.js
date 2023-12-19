noseX = 0
noseY = 0
right_wristX = 0
left_wristX = 0
size_of_text = left_wristX - right_wristX


function setup() {
    canvas = createCanvas(500, 500)
    canvas.position(900, 370)
    video = createCapture(VIDEO);
    video.position(10,370)
    video.size(1000,500)
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose', gotposes)
    //video.hide();
}


function draw() {
    //image(video,0,0,500,500)
    background("white")
    fill(48,213,200)
    text("Hello",noseX, noseY)
    textSize(size_of_text)
}



function modelloaded() {
    console.log("the model has been loaded")
}


function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x -105
        noseY = results[0].pose.nose.y -90
        right_wristX = results[0].pose.rightWrist.x
        left_wristX = results[0].pose.leftWrist.x
        size_of_text = left_wristX - right_wristX
        console.log(size_of_text)
    }

}


