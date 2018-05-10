
//ANIMAZIONE NUOTO RANDOM POSITIONS

var reached = true;

function rdmSwim(fish){ //Object3D

  var pos = fish.position;

  if(reached == true){

    newPos = new THREE.Vector3( 	Math.ceil(Math.random()*10),
                                  Math.ceil(Math.random()*3),
                                  Math.ceil(Math.random()*10));

    reached = false;
    fish.lookAt(newPos);
  }

  if((Math.floor(pos.x) == newPos.x) && (Math.floor(pos.y) == newPos.y) && (Math.floor(pos.z) == newPos.z)){
    reached = true;

  }else{
    if(Math.floor(pos.x) != newPos.x){
      if(pos.x < newPos.x ){ //TODO: cFish deve tornare indietro, devo girarlo
        fish.position.x+=0.05;

      }else{
        fish.position.x-=0.05;
      }
    }
    if(Math.floor(pos.y) != newPos.y){
      if(pos.y < newPos.y ){ //cFish deve tornare indietro, devo girarlo
        fish.position.y+=0.05;

      }else{
        fish.position.y-=0.05;
      }
    }
    if(Math.floor(pos.z) != newPos.z){
      if(pos.z < newPos.z ){ //cFish deve tornare indietro, devo girarlo
        fish.position.z+=0.05;

      }else{
        fish.position.z-=0.05;
      }
    }
  }
}

//ANIMAZIONE NUOTO ORIZZONTALE
var isTurning = false, goingLeft= true, ang=0.0;

//sharkPivot: obj as pivot
function horizontalSwim(sharkPivot){

  if(isTurning){
    if(ang > 3.14 && goingLeft){
      isTurning = false;
      sharkPivot.position.x += 0.1;
      goingLeft = false;

    }else if(ang > 6.24){
      ang=0;
      goingLeft = true;
      sharkPivot.position.x -= 0.1;
      isTurning = false;

    }else{
      ang+= 0.05;
      sharkPivot.rotation.y = -ang;
      }

  }else{
    if(sharkPivot.position.x >= 20 || sharkPivot.position.x <= -20){
      isTurning = true;
    }else{
      if(goingLeft){
        sharkPivot.position.x -= 0.1;
      }else{
        sharkPivot.position.x += 0.1;
      }
    }
  }
}
