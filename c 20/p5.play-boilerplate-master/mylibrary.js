function whitehat(){
    // the diffrence between the horizuntal distances of two objects = sum of half of their width
    if (bow.x-aarow.x <=bow.width/2+aarow.width/2&&aarow.x-bow.x <=bow.width/2+aarow.width/2&&bow.y-aarow.y <=bow.height/2+aarow.height/2
      &&aarow.y-bow.y <=bow.height/2+aarow.height/2){
     return true 
    }else {return false}
  }
  function bounceeeee(){
  if(  bow.x-aarow.x <=bow.width/2+aarow.width/2&&aarow.x-bow.x <=bow.width/2+aarow.width/2){
   aarow.velocityX=aarow.velocityX*-1
   bow.velocityX=bow.velocityX*-1
  }
  if(bow.y-aarow.y <=bow.height/2+aarow.height/2&&aarow.y-bow.y <=bow.height/2+aarow.height/2){
    bow.velocityY=bow.velocityY*-1
    aarow.velocityY=aarow.velocityY*-1
  }
   
    
  
  
  
  
  
  
  
  }









