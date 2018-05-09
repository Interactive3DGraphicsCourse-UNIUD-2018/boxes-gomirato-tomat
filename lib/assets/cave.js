//crea una grotta
function makeCave(textureRock, textureCave, scaleFactor){

  var cave = new THREE.Object3D();

  var outerGeo = new THREE.BoxGeometry(scaleFactor*1.2, scaleFactor*1.2, scaleFactor*1.2);
  var innerGeo = new THREE.BoxGeometry(scaleFactor, scaleFactor, scaleFactor);

  var outerMat = new THREE.MeshBasicMaterial({map: textureRock});
  var innerMat = new THREE.MeshBasicMaterial({map: textureCave});

  var outerMesh = new THREE.Mesh(outerGeo,outerMat);
  var innerMesh = new THREE.Mesh(innerGeo, innerMat);

  cave.add(outerMesh, innerMesh);
  innerMesh.position.set(0,0,0.11);

  return cave;
}
