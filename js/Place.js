AFRAME.registerComponent('house-view',{
    init:function(){
     this.createViews()
    }, 
    createViews:function(){
     const roomViewContainer = document.querySelector('#Room-container')

      const posX =  0;
      const posY = 10;
      const posZ = -40;

      const position = {x: posX,y : posY,z : posZ}
      
      const home  = this.createRoom(position)
      roomViewContainer.appendChild(home)
    },
    createRoom: function(position){
     const homeEl = document.createElement('a-entity')
     homeEl.setAttribute('visible',true)
     homeEl.setAttribute('geometry',{
         primitive:'circle',
         radius : 3
     })
     homeEl.setAttribute('position',position)
     homeEl.setAttribute('material',{src : 'home.jpg',opacity : 1})
     homeEl.setAttribute('cursor-listener',{})
    }
   })