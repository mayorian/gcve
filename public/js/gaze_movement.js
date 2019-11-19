var sceneEl, player, frontmove, backmove, leftmove, rightmove, movetofront, movetoback, movetoleft, movetoright;
const SpeedOfVelocity = 0.04;

AFRAME.registerComponent("gaze-movement", {
  
  init: function(){
    sceneEl = document.querySelector("a-scene");
    player = sceneEl.querySelector("#rig");
    frontmove = sceneEl.querySelector("#frontmove");
    backmove = sceneEl.querySelector("#backmove");
    leftmove = sceneEl.querySelector("#leftmove");
    rightmove = sceneEl.querySelector("#rightmove");
    
    frontmove.addEventListener("mouseenter", function() {
      console.log("I was clicked at: FRONTMOVEMENT");
      movetofront = true;
      //player.object3D.position.z -= SpeedOfVelocity;
    });
    
      frontmove.addEventListener("mouseleave", function(evt) {
      console.log("I was left at: FRONTMOVEMENT");
      movetofront = false;
    });

    backmove.addEventListener("mouseenter", function(evt) {
      console.log("I was clicked at: BACKMOVEMENT");
      movetoback = true;
    });
    
    backmove.addEventListener("mouseleave", function(evt) {
      console.log("I was left at: BACKMOVEMENT");
      movetoback = false;
    });

    leftmove.addEventListener("mouseenter", function(evt) {
      console.log("I was clicked at: LEFTMOVEMENT");
      movetoleft = true;
    });
    
    leftmove.addEventListener("mouseleave", function(evt) {
      console.log("I was left at: LEFTMOVEMENT");
      movetoleft = false;
    });

    rightmove.addEventListener("mouseenter", function(evt) {
      console.log("I was clicked at: RIGHTMOVEMENT");
      movetoright = true;
    });
    
    rightmove.addEventListener("mouseleave", function(evt) {
      console.log("I was left at: RIGHTMOVEMENT");
      movetoright = false;
    });
    
  },
  
  tick: function() {
    
    
    if(movetofront == true){
      player.object3D.position.z -= SpeedOfVelocity;
    };
    
    if(movetoback == true){
      player.object3D.position.z += SpeedOfVelocity;
    };
    
    if(movetoleft == true){
      player.object3D.position.x -= SpeedOfVelocity;
    };
    
    if(movetoright == true){
      player.object3D.position.x += SpeedOfVelocity;
    };


  }
});
