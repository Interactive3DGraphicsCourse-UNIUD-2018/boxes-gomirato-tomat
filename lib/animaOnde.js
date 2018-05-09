
// Matrici traslazione onde
var incrY = new THREE.Matrix4();

incrY.set( 1, 0, 0, 0,
           0, 1, 0, 0.2,
           0, 0, 1, 0,
           0, 0, 0, 1);

var decrY2 = new THREE.Matrix4();

decrY2.set( 1, 0, 0, 0,
           0, 1, 0, -0.4,
           0, 0, 1, 0,
           0, 0, 0, 1);

var incrY2 = new THREE.Matrix4();

incrY2.set( 1, 0, 0, 0,
             0, 1, 0, 0.4,
             0, 0, 1, 0,
             0, 0, 0, 1);

var decrY = new THREE.Matrix4();

decrY.set( 1, 0, 0, 0,
           0, 1, 0, -0.2,
           0, 0, 1, 0,
           0, 0, 0, 1);

function muoviOnde(mare, index){

    if(index==0){
      for(var i=0; i< mare[0].length; i++){
        mare[index][i].applyMatrix(incrY2);
        mare[index+1][i].applyMatrix(incrY);
      }
      return index+1;

    }else if(index == mare.length-1){
      for(var i=0; i< mare[0].length; i++){
        mare[index][i].applyMatrix(decrY);
        mare[index-1][i].applyMatrix(decrY2);
      }
      return 0;

    }else{
      for(var i=0; i< mare[0].length; i++){
        mare[index-1][i].applyMatrix(decrY2);
        mare[index][i].applyMatrix(incrY);
        mare[index+1][i].applyMatrix(incrY);
      }
      return index+1;
    }
}
