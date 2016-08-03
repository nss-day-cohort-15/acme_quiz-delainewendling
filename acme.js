var Explosion = (function(explosion){

  explosion.pickCategory = function(categories, types, products){
   $('.dropdown-menu li').click((e)=>{
      if(e.target.id === "fireworks"){
        console.log("fireworks")
        Explosion.fireworks(categories, types, products)
      } else if (e.target.id === "demolition") {
        console.log("demolition")
        Explosion.demolition(categories, types, products)
      } else {
        console.log("safety")
        Explosion.safety(categories, types, products)
      }
    })
  }

  explosion.addItems = function(categories, types, products){
    
  }

 return explosion
})(Explosion || {})
