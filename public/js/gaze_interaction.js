var sceneEl, piest, ojnica, hriadel, ventil, vacka;
var vackaState, ojnicaState, hriadelState, ventilState, piestState;
var tooltipTexGUI;
AFRAME.registerComponent("gaze-interaction", {
  
  init: function(){
    sceneEl = document.querySelector("a-scene");
    vacka = sceneEl.querySelector("#vacka");
    piest = sceneEl.querySelector("#piest");
    ventil = sceneEl.querySelector("#ventil");
    ojnica = sceneEl.querySelector("#ojnica");
    hriadel = sceneEl.querySelector("#hriadel");
    tooltipTexGUI= sceneEl.querySelector("#tooltiptext");
    
    
    vacka.addEventListener("mouseenter", function() {
      vacka.setAttribute('material', 'color', '#92290c');
      tooltipTexGUI.setAttribute('text', 'value', 'Vackovy hriadel');
    });
    
    vacka.addEventListener("mouseleave", function(evt) {
      vacka.setAttribute('material', 'color', '#828282');
      tooltipTexGUI.setAttribute('text', 'value', '-');
    });

    piest.addEventListener("mouseenter", function(evt) {
     piest.setAttribute('material', 'color', '#92290c');
     tooltipTexGUI.setAttribute('text', 'value', 'Piesty valcov');
    });
    
    piest.addEventListener("mouseleave", function(evt) {
     piest.setAttribute('material', 'color', '#285893');
     tooltipTexGUI.setAttribute('text', 'value', '-');
    });

    ventil.addEventListener("mouseenter", function(evt) {
     ventil.setAttribute('material', 'color', '#92290c');
     tooltipTexGUI.setAttribute('text', 'value', 'Ventily motora');
    });
    
    ventil.addEventListener("mouseleave", function(evt) {
     ventil.setAttribute('material', 'color', '#235421');
     tooltipTexGUI.setAttribute('text', 'value', '-');
    });

    ojnica.addEventListener("mouseenter", function(evt) {
     ojnica.setAttribute('material', 'color', '#92290c');
     tooltipTexGUI.setAttribute('text', 'value', 'Ojnice piestov');
    });
    
    ojnica.addEventListener("mouseleave", function(evt) {
     ojnica.setAttribute('material', 'color', '#2d2d2d');
     tooltipTexGUI.setAttribute('text', 'value', '-');
    });
    
    hriadel.addEventListener("mouseenter", function(evt) {
     hriadel.setAttribute('material', 'color', '#92290c'); 
     tooltipTexGUI.setAttribute('text', 'value', 'Hriadel pohonu');
    });
    
    hriadel.addEventListener("mouseleave", function(evt) {
     hriadel.setAttribute('material', 'color', '#8c854d');
     tooltipTexGUI.setAttribute('text', 'value', '-');
    });
    
  }
});


AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function () {
      console.log('Player hit something!');
      this.el.etAttribute('material', 'color', '#8c854d');
    });
  }
});