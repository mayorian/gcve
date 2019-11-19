    AFRAME.registerComponent('camera-text', {
      
       tick: function () {
        var el = this.el;   
        el.setAttribute("text", {value: 'Camera'});  
         
      }
    });
