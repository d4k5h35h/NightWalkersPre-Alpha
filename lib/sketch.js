// Programmed by d4k5h35h
// Music and sfx by d4k5h35h
// Graphics by d4k5h35h
// Basically i did it all. Thank You.

/*
Level 1 is a walking tutorial as in, the player learns the controls by walking through the level. After reaching certain points in the game they learn a new control.The first control will be the left and right movement buttons. The second control will be jump. The third being the melee attack. The range button will be introduced in level 4.
*/

/*
Level 2 and 3 will be regular gameplay where the player learns to survive on their own.
Level 3 will end in a glorious boss fight with jonah.
*/

/*
Level 4 will be the introduction to the range weapon. this will be used by the player as the player for survival (duh).
*/

/*
Level 5 is also regular gameplay. Level 6 ends in a boss fight with Mavis (Drac's daughter).
*/

/*
Level 7 and 8 is also regular gameplay. Level 9 gives the player a small preview of Dracula's wrath
*/

/*
Level 10 starts and ends with the mega-boss fight. When the player wins they see the cutscene with dracula speaking his last words, then the player goes back home and has a party with his friends... well those who still live.

Then a man with large furry ears appears with a wolf as a small preview for the sequel.
*/

/*
  0.1 = loading screen
  0.2 = menu screen 
  0.3 = levels screen
  0.4 = upgrade screen
  0.5 = story screen
  0.6 = victory screen
  1-10 = game screen
*/
 
/*
grass tiles pngs
for levels 1-3

"img/grass/png/tiles/01.png","img/grass/png/tiles/02.png","img/grass/png/tiles/03.png","img/grass/png/tiles/04.png","img/grass/png/tiles/05.png","img/grass/png/tiles/06.png","img/grass/png/tiles/06.png","img/grass/png/tiles/07.png","img/grass/png/tiles/08.png","img/grass/png/tiles/09.png","img/grass/png/tiles/10.png","img/grass/png/tiles/11.png","img/grass/png/tiles/12.png","img/grass/png/tiles/13.png","img/grass/png/tiles/14.png","img/grass/png/tiles/15.png","img/grass/png/tiles/16.png","img/grass/png/tiles/16.png","img/grass/png/tiles/17.png","img/grass/png/tiles/18.png","img/grass/png/tiles/19.png","img/grass/png/tiles/20.png","img/grass/png/tiles/21.png","img/grass/png/tiles/22.png"
*/ 

var player;
var a = 0;
var up, left, right, melee, range, upimg, leftimg, rightimg, meleeimg, rangeimg;
var button1,bgimg1;
var gameState = 0.1;
var particles = [];
var b1img,b2img,b3img;

function preload(){
  b1img = loadImage("buttons/playbutton.png");
  b2img = loadImage("buttons/nextbutton.png");
  b3img = loadImage("buttons/backbutton.png")
  bgimg1 = loadImage("grass/png/elements/background.png");
  upimg = loadImage("controls/jump.png");
  leftimg = loadImage("controls/left.png");
  rightimg = loadImage("controls/right.png");
  rangeimg = loadImage("controls/range.png");
  meleeimg = loadImage("controls/punch.png");
}

function setup(){
  p5.disableFriendlyErrors === true;
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
    player = createSprite(width / 2, height / 2, 50, 50);
    up = createSprite(width - 100, height - 125, 100, 100);
    left = createSprite(120, height - 125, 100, 100);
    right = createSprite(320, height - 125, 100, 100);
    melee = createSprite(width - 250, height - 125, 100, 100);
    range = createSprite(width - 100, height - 325, 100, 100);
    button1 = createSprite(width / 2,height - 50,250,75);
    button2 = createSprite(width / 3,height - 50,250,75);
    button3 = createSprite(width / 1.5,height - 50,250,75);
    button1.addImage("b1image", b1img);
    button2.addImage("b2image", b2img);
    button3.addImage("b3image", b3img);
    up.addImage("upimage", upimg);
    left.addImage("leftimage", leftimg);
    right.addImage("rightimage", rightimg);
    range.addImage("rangeimage", rangeimg);
    melee.addImage("meleeimage", meleeimg);
    button1.scale = 0.5;
    button2.scale = 0.5;
    button3.scale = 0.5;
    up.scale = 0.5;
    left.scale = 0.5;
    right.scale = 0.5;
    range.scale = 0.5;
    melee.scale = 0.5;
 }

function draw(){
  background(0);
   //basic attributes
   player.position.y += 9.82/3
    //d   
    if (keyIsDown(68)) {
      player.position.x = player.position.x + 5;
    }
    //a
    else if (keyIsDown(65)) {
      player.position.x = player.position.x - 5;
    }
    //w
    else if (keyIsDown(87)) {
      player.position.y = player.position.y - 9.82;
    }
    else{
      player.setSpeed(0, 0);
    }
    //rev-edge(to be trademarked)
    if(player.position.x > width){
      player.postition.x = 0;
    }
    if(player.position.x < 0){
      player.position.x = width;
    }
    if(player.position.y > height){
      player.position.y = 0;
    }
    if(player.position.y < 0){
      player.position.y = height;
    }

  button1.visible = false;
  button2.visible = false;
  button3.visible = false;
  
  //loding screen
  if (gameState === 0.1){
    fire();  
    button1.visible = true;
    button1.onMouseReleased = function(){
      gameState = 0.2;
      button1.visible = false;
    }
  }
  
  //menu screen
  if(gameState == 0.2){
    background(255,0,255);
    button2.visible = true;
      button2.onMouseReleased = function(){
        gameState = 0.3;
        button2.visible = false
    }  
     button3.visible = true;
    button3.onMouseReleased = function(){
      gameState = 0.1;
      button3.visible = false;
    }
  }

  //levels screen
  if(gameState == 0.3){ 
    background(0,255,0);
    button2.visible = true;
    button2.onMouseReleased = function(){
      gameState = 0.4;
      button2.visible = false
  }  
   button3.visible = true;
  button3.onMouseReleased = function(){
    gameState = 0.2;
    button3.visible = false;
  }
  }

  //upgrade screen
  if(gameState == 0.4){
    background(51);
    button2.visible = true;
      button2.onMouseReleased = function(){
        gameState = 0.5;
        button2.visible = false
    }  
     button3.visible = true;
    button3.onMouseReleased = function(){
      gameState = 0.3;
      button3.visible = false;
    }
  }

  //story screen
  if(gameState == 0.5){ 
    background(255,255,0);
    button1.visible = true;
      button1.onMouseReleased = function(){
        gameState = 1;
        button1.visible = false
    }  
     button3.visible = true;
    button3.onMouseReleased = function(){
      gameState = 0.4;
      button3.visible = false;
    }
  }

  //level 1 code
  if(gameState === 1){
    background(bgimg1);
    player.visible = true;
    up.visible = true;
    melee.visible = true;
    left.visible = true;
    right.visible = true;
    range.visible = false;
  }
  
  // this is so that i dont need to write the same thing again and again
  else if(gameState === 0.1 || gameState === 0.2|| gameState === 0.3|| gameState === 0.4|| gameState === 0.5|| gameState === 0.6){
  player.visible = false;
  up.visible = false;
  melee.visible = false;
  left.visible = false;
  right.visible = false;
  range.visible = false;
  }
  
  drawSprites();
}


class Particle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.alpha = 255;
    this.d = random(10, 30);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 7.75;
  }
  finished() {
    return this.alpha < 0;
  }

  show() {
    noStroke();
    fill(random(180, 250), random(50, 200), 10, this.alpha);
    ellipse(this.x, this.y, this.d, this.d);
  }
}
function fire(){
  for (let i = 0; i < 5; i++) {
      let p = new Particle(width / 20, height / 2, random(5, 15), random(-5, 5));
      particles.push(p);
      let q = new Particle(width / 1.05, height / 2, random(-5, -15), random(5, -5));
      particles.push(q);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        particles.splice(i, 1);
      }
    }
  }