homie = ""
no = ""
lws = 0
rws = 0
homiestat = ""
nostat = ""

function preload(){
    homie = loadSound("music.mp3")
    no = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500)
    canvas.position(450, 400)

    video = createCapture(VIDEO)
    video.hide()
    
    pn = ml5.poseNet(video, modelLoaded)
    pn.on('pose', gp)
}

function draw() {
    image(video, 0, 0, 600, 500)
    fill("#8c6117")
    stroke("#8c6117")
    nostat = songa.isPlaying()
    homiestat = song.isPlaying()
    if(lws > 0.2){
        circle(lwx, lwy, 20)
        homie.stop()
        if(nostat = false){
            no.play()
            document.getElementById("song").innerHTML = "Welcome to Los Santos - Non-lyrical"
        }
    }
}

function play() {
    no.play()
    no.setVolume(1)
    no.rate(1)
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
        lws = results[0].pose.keypoints[9].score
    }
}

function modelLoaded(){
    console.log(" posenet boom!")
}