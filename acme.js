$(document).ready(function(){
   $('.dropdown-menu li').click((e)=>{
      if(e.target.id === "fireworks"){
        console.log("fireworks")
        debugger
        Explosion.loadItems(0)
      } else if (e.target.id === "demolition") {
        console.log("demolition")
        // Explosion.loadDemolition()
      } else {
        console.log("safety")
        // Explosion.loadSafety()
      }
  })
})
