AFRAME.registerComponent('set-rotation', {
    tick: function () {    
      var el = this.el;  
      var player_head = document.querySelector("#playerhead");
      var rotY = player_head.getAttribute('rotation');
      //el.setAttribute('rotation', rotY);
     el.setAttribute('rotation', {y : rotY.y});
      
     // console.log(rotY.y);
    }
  });

AFRAME.registerComponent('body-move', {
    tick: function () {    
      var el = this.el;  
      var player_head = document.querySelector("#playerhead");
      var pos = player_head.getAttribute('position');
      //el.setAttribute('rotation', rotY);
     el.setAttribute('position', {x : pos.x, y : pos.y});
      
     // console.log(rotY.y);
    }
  });

