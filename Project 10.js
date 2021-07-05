var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var Sophia = createSprite(20, 25, 18, 18);
Sophia.shapeColor = "orange";
var wall1 = createSprite(10, 70, 100, 20);
wall1.shapeColor = "brown";
var wall2 = createSprite(100, 50, 20, 100);
wall2.shapeColor = "brown";
var wall3 = createSprite(140, 35, 100, 20);
wall3.shapeColor = "brown";
var wall4 = createSprite(70, 140, 95, 20);
wall4.shapeColor = "brown";
var wall5 = createSprite(155, 130, 20, 100);
wall5.shapeColor = "brown";
var wall6 = createSprite(270, 160, 100, 20);
wall6.shapeColor = "brown";
var wall7 = createSprite(250, 85, 20, 100);
wall7.shapeColor = "brown";
var wall8 = createSprite(330, 60, 100, 20);
wall8.shapeColor = "brown";
var wall9 = createSprite(360, 135, 20, 100);
wall9.shapeColor = "brown";
var wall10 = createSprite(335, 365, 20, 95);
wall10.shapeColor = "brown";
var wall11 = createSprite(255, 390, 100, 20);
wall11.shapeColor = "brown";
var wall12 = createSprite(345, 220, 170, 20);
wall12.shapeColor = "brown";
var wall13 = createSprite(220, 270, 20, 120);
wall13.shapeColor = "brown";
var wall14 = createSprite(125, 220, 105, 20);
wall14.shapeColor = "brown";
var wall15 = createSprite(40, 255, 20, 90);
wall15.shapeColor = "brown";
var wall16 = createSprite(15, 255, 30, 20);
wall16.shapeColor = "brown";
var wall17 = createSprite(20, 352, 20, 105);
wall17.shapeColor = "brown";
var wall18 = createSprite(95, 305, 20, 100);
wall18.shapeColor = "brown";
var wall19 = createSprite(170, 320, 85, 20);
wall19.shapeColor = "brown";
var wall20 = createSprite(170, 365, 20, 80);
wall20.shapeColor = "brown";
var wall21 = createSprite(395, 280, 210, 20);
wall21.shapeColor = "brown";
var wall22 = createSprite(280, 315, 20, 90);
wall22.shapeColor = "brown";
var cup = createSprite(400, 380, 20, 60);
cup.shapeColor = "yellow";
function draw() {
  background("pink");
  if (keyDown("UP_ARROW")){
  Sophia.velocityX=0;
  Sophia.velocityY=-4;
  }
  if (keyDown("DOWN_ARROW")) {
    Sophia.velocityX=0;
    Sophia.velocityY=4;
  }
  if (keyDown("RIGHT_ARROW")) {
  Sophia.velocityX=4;
  Sophia.velocityY=0;
  }
  if (keyDown("LEFT_ARROW")){
  Sophia.velocityX=-4;
  Sophia.velocityY=0;
  }
  if ( Sophia.collide(cup))
  {
    background("white");
    drawSprites();
    

  }
  
  
  
  
 
  createEdgeSprites();
  Sophia.bounceOff(edges);
  Sophia.bounceOff(wall1);
  Sophia.bounceOff(wall2);
  Sophia.bounceOff(wall3);
  Sophia.bounceOff(wall4);
  Sophia.bounceOff(wall5);
  Sophia.bounceOff(wall6);
Sophia.bounceOff(wall7);
Sophia.bounceOff(wall8);
Sophia.bounceOff(wall9);
Sophia.bounceOff(wall10);
Sophia.bounceOff(wall11);
Sophia.bounceOff(wall12);
Sophia.bounceOff(wall13);
Sophia.bounceOff(wall14);
Sophia.bounceOff(wall15);
Sophia.bounceOff(wall16);
Sophia.bounceOff(wall17);
Sophia.bounceOff(wall18);
Sophia.bounceOff(wall19);
Sophia.bounceOff(wall20);
Sophia.bounceOff(wall21);
Sophia.bounceOff(wall22);
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
