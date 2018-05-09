//////  CRAZIONE DI 3 TIPI DI NUVOLE  ////////////

function creaNuvolaL(scaleFactor){

  var cloud = new THREE.Object3D();
  var geo1 = new THREE.BoxGeometry(scaleFactor, scaleFactor*0.5, scaleFactor*2);
  var geo2 = new THREE.BoxGeometry(scaleFactor, scaleFactor*0.5, scaleFactor);
  var mat = new THREE.MeshBasicMaterial({color: 0xf0f0f0, transparent: true, opacity: 0.9});
  var mesh1 = new THREE.Mesh(geo1, mat);
  var mesh2 = new THREE.Mesh(geo2, mat);
  cloud.add(mesh1, mesh2);
  mesh2.position.set(scaleFactor, 0, scaleFactor/2);

  return cloud;
}

function creaNuvolaT(scaleFactor){  //intersezione tra 2 nuvole

  var cloud = new THREE.Object3D();
  var geo = new THREE.BoxGeometry(scaleFactor, scaleFactor, scaleFactor*3);
  var mat = new THREE.MeshBasicMaterial({color: 0xf0f0f0, transparent: true, opacity: 0.9});

  var cloud2 = new creaNuvolaL(scaleFactor);

  var mesh = new THREE.Mesh(geo, mat);

  cloud.add(mesh, cloud2);
  cloud2.rotation.x = 90*Math.PI/180;
  cloud2.position.set(0,scaleFactor/2,0);

  return cloud;
}

function creaNuvolaO(scaleFactor){

  var cloud = new THREE.Object3D();

  var cloud1 = new creaNuvolaT(scaleFactor);
  var cloud2 = new creaNuvolaL(scaleFactor);

  cloud.add(cloud1,cloud2);
  cloud2.rotation.y = 90*Math.PI/180;
  cloud2.rotation.x = 90*Math.PI/180;

  return cloud;
}
