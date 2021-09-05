
function preload() {
	mario_jump=loadSound("jump.wav");
	mario_kick=loadSound("kick.wav");
	mario_coin=loadSound("coin.wav");
	mario_game_over=loadSound("gameover.wav");
	mario_die=loadSound("mariodie.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video=createCapture(VIDEO);
video.size(800,400);
video.parent("game_console");
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",getResult);

};
function getResult(result){
if (result.length>0){
	console.log(result);
	noseX=result[0].pose.nose.x;
	noseY=result[0].pose.nose.y;

}
}
function modelLoaded(){
console.log("hi");
}
function draw() {
	game()
}






