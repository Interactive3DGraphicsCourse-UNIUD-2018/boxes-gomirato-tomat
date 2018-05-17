
//ANIMAZIONE NUOTO RANDOM POSITIONS

var reached = true;

function rdmSwim(fish){ //Object3D

  var pos = fish.mesh.position;

  if(fish.reached == true){

    fish.newPos = new THREE.Vector3( 	Math.ceil(Math.random()*10),
                                      Math.ceil(Math.random()*3),
                                      Math.ceil(Math.random()*10));

    fish.reached = false;
    fish.mesh.lookAt(fish.newPos);
  }

  if((Math.floor(pos.x) == fish.newPos.x) && (Math.floor(pos.y) == fish.newPos.y) && (Math.floor(pos.z) == fish.newPos.z)){
    fish.reached = true;

  }else{
    if(Math.floor(pos.x) != fish.newPos.x){
      if(pos.x < fish.newPos.x ){
        fish.mesh.position.x+=fish.speed;

      }else{
        fish.mesh.position.x-=fish.speed;
      }
    }
    if(Math.floor(pos.y) != fish.newPos.y){
      if(pos.y < fish.newPos.y ){
        fish.mesh.position.y+=fish.speed;

      }else{
        fish.mesh.position.y-=fish.speed;
      }
    }
    if(Math.floor(pos.z) != fish.newPos.z){
      if(pos.z < fish.newPos.z ){ 
        fish.mesh.position.z+=fish.speed;

      }else{
        fish.mesh.position.z-=fish.speed;
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
