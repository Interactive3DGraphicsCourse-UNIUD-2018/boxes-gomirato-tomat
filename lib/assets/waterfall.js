
//crea "frammento" di cascata
function cubeWaterfall( texture, scaleFactor){

  if(scaleFactor == undefined) scaleFactor = 1;


  this.mesh = new THREE.Mesh( new THREE.BoxGeometry(scaleFactor, scaleFactor, scaleFactor), // 1* scaleFactor = scaleFactor
                              new THREE.MeshBasicMaterial({ map: texture,
                                                            wireframe: false,
                                                            transparent: true,
                                                            opacity:0.8}));

  this.counter = 0.0;
}

function creaCurvaCascata(points){  //Vector3

  var curva = new THREE.CatmullRomCurve3(points);
  return curva;
}

function animaCascata(curva, cube){

  var pos = curva.getPoint(cube.counter);
  cube.mesh.position.set(pos.x, pos.y, pos.z);
  cube.counter += 0.05;
}
