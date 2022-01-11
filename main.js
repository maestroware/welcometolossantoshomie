song = ""
songa = ""

function preload(){
    song = loadSound("music.mp3")
    songa = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
    
    pn = ml5.poseNet(video, modelLoaded)
    pn.on('pose', gp)
}

function draw() {
    image(video, 0, 0, 600, 500)
}

function play() {
    songa.play()
    song.setVolume(1)
    song.rate(1)
}

function gp(results) {
    if (results.length > 0) {
        console.log(results)
        lwx = results[0].pose.leftWrist.x
        lwy = results[0].pose.leftWrist.y
        console.log(lwx +" lwy:" + lwy)
        rwx = results[0].pose.rightWrist.x
        rwy = results[0].pose.rightWrist.y
        console.log(rwx +" rwy:" + rwy)
    }
}

function modelLoaded(){
    console.log(" posenet boom!")
}
