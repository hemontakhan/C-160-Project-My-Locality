AFRAME.registerComponent('cursor-listener',{
 init:function(){
  this.clickEvent()
 },
clickEvent:function(){
 this.el.addEventListener('click',evt =>{
  const skyEl = document.querySelector('#Sky') 
  skyEl.setAttribute('material',{
  src:'room.jpg'}
  )
 })

}
})