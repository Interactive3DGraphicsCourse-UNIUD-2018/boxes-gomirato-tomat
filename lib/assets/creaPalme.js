//crea una palma singola
function creaPalma(textureTronco, textureFoglie){

  var palma = new THREE.Object3D();
  var x = 2;
  var y = 2;
  var z = 2;
  var ang = 0;
  var h = 0;
  var trs = 0;

  //tronco
  for(var i=0; i< 10; i++){
    var geot = new THREE.BoxGeometry(x,y,z);
    var matt = new THREE.MeshBasicMaterial({map: textureTronco, wireframe: false});
    var mesh = new THREE.Mesh(geot, matt);
    mesh.rotation.z += ang * Math.PI/180;
    mesh.position.set(trs, h, 0);
    palma.add(mesh);
    trs+= 0.5;
    h += y-0.4;
    x-= 0.1;
    y-= 0.1;
    z-= 0.1;
    ang -= 8;
  }

  //fogliame
  var fogliame = new THREE.Object3D();
  var foglia = new THREE.Object3D();

  var geo1 = new THREE.BoxGeometry(2, 0.1, 2.5);
  var geo2 = new THREE.BoxGeometry(1.5, 0.1, 2.5);
  var geo3 = new THREE.BoxGeometry(1, 0.1, 2);
  var geo4 = new THREE.BoxGeometry(0.5, 0.1, 1.5);

  var matf = new THREE.MeshBasicMaterial({map: textureFoglie, wireframe: false});

  var mesh1 = new THREE.Mesh(geo1, matf);
  foglia.add(mesh1);
  mesh1.rotation.x -= 10*Math.PI/180;

  var mesh2 = new THREE.Mesh(geo2, matf);
  foglia.add(mesh2);
  mesh2.position.set(0,Math.sin(10*Math.PI/180),Math.cos(10*Math.PI/180)+1.2);

  var mesh3 = new THREE.Mesh(geo3, matf);
  foglia.add(mesh3);
  mesh3.rotation.x += 20*Math.PI/180;
  mesh3.position.set(0, Math.sin(10*Math.PI/180)-0.3,Math.cos(10*Math.PI/180) + 3.4);

  var mesh4 = new THREE.Mesh(geo4, matf);
  foglia.add(mesh4);
  mesh4.rotation.x += 50*Math.PI/180;
  mesh4.position.set(0, Math.sin(20*Math.PI/180)-1.3,Math.cos(20*Math.PI/180) + 4.7);

  var foglia2 = foglia.clone();
  var foglia3 = foglia.clone();
  var foglia4 = foglia.clone();
  var foglia5 = foglia.clone();
  var foglia6 = foglia.clone();
  var foglia7 = foglia.clone();
  var foglia8 = foglia.clone();

  ang = 45;
  fogliame.add(foglia, foglia2, foglia3, foglia4, foglia5, foglia6, foglia7, foglia8);
  for(var i=1; i < 8; i++){
    fogliame.children[i].rotation.y += ang *Math.PI/180;
    ang+= 45;
  }
  palma.add(fogliame);
  fogliame.rotation.z -= 15*Math.PI/180;
  fogliame.position.set(trs,h,0);

  return palma;
}

//crea un gruppo di 3 palme disposte a cerchio
function palme3(textureTronco, textureFoglie){

  var palm3 = new THREE.Object3D();

  var palma1 = creaPalma(textureTronco, textureFoglie);
  var palma2 = creaPalma(textureTronco, textureFoglie);
  var palma3 = creaPalma(textureTronco, textureFoglie);

  palm3.add(palma1,palma2,palma3);
  palma1.position.set(3,0,0);
  palma2.position.set(-1,0,-3);
  palma3.position.set(-1,0,3);

  palma2.rotation.y += 120*Math.PI/180;
  palma3.rotation.y -= 120*Math.PI/180;

  return palm3;
}
