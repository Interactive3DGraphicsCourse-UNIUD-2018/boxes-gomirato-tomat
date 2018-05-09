// crea squalo
function makeShark(backT, bellyT, flankT){

    //pivot
    var shark = new THREE.Object3D();

    //corpo
    var bodyGeo = new THREE.BoxGeometry(1,1,1);

    var flankSkin = new THREE.MeshBasicMaterial({map: flankT});
    var backSkin = new THREE.MeshBasicMaterial({map: backT});
    var bellySkin = new THREE.MeshBasicMaterial({map: bellyT});

    var skinTexture = [flankSkin, flankSkin, backSkin, bellySkin, flankSkin, flankSkin];
    var skin = new THREE.MultiMaterial( skinTexture );

    var body = new THREE.Mesh(bodyGeo, skin);

    var bodyGeo2 = new THREE.BoxGeometry(1.1,0.8,0.8);
    var body2 = new THREE.Mesh(bodyGeo2, skin);
    body2.position.set(0.7,0,0);

    var bodyGeo3 = new THREE.BoxGeometry(0.8,0.6,0.5);
    var body3 = new THREE.Mesh(bodyGeo3, skin);
    body3.position.set(1.6,0,0);

    //pinne
    var pinnaDorsale = new THREE.Object3D();
    var pdGeo1 = new THREE.BoxGeometry(0.2, 0.8,0.2);
    var pdGeo2 = new THREE.BoxGeometry(0.3, 1,0.2);
    var pdGeo3 = new THREE.BoxGeometry(0.2, 1.4,0.2);

    var pd1 = new THREE.Mesh(pdGeo1, new THREE.MeshBasicMaterial({map: backT}));
    var pd2 = new THREE.Mesh(pdGeo2, new THREE.MeshBasicMaterial({map: backT}));
    var pd3 = new THREE.Mesh(pdGeo3, new THREE.MeshBasicMaterial({map: backT}));

    pd1.position.set(-0.2, 0.5, 0);
    pd2.position.set(0, 0.5, 0);
    pd3.position.set(0.2, 0.5, 0);
    pinnaDorsale.add(pd1,pd2,pd3);

    var pinnaLateraleSx = pinnaDorsale.clone();
    var pinnaLateraleDx = pinnaDorsale.clone();

    pinnaLateraleSx.rotation.x += 140*Math.PI / 180;
    pinnaLateraleDx.rotation.x -= 140*Math.PI / 180;

    shark.add(pinnaDorsale, pinnaLateraleDx, pinnaLateraleSx);

    //coda
    var tailGeo = new THREE.BoxGeometry(2, 0.5, 0.2);
    var tailTop = new THREE.Mesh(tailGeo, skin);
    var tailBottom = new THREE.Mesh(tailGeo, skin);

    tailTop.rotation.z += 45*Math.PI / 180;
    tailBottom.rotation.z -=30*Math.PI / 180;

    tailTop.position.set(2.2,0.5,0);
    tailBottom.position.set(2.2,-0.5,0);

    //testa
    var headGeo = new THREE.BoxGeometry(0.8,0.8,0.8);
    var head = new THREE.Mesh(headGeo, skin);
    head.position.set(-0.8,0,0);

    //occhi
    var eyeGeo = new THREE.BoxGeometry(0.2,0.2,0.1);
    var eyeGeo2 = new THREE.BoxGeometry(0.1,0.1,0.1);
    var eyeMat = new THREE.MeshBasicMaterial({color: 0xffffff});
    var eyeMat2 = new THREE.MeshBasicMaterial({color: 0x000000});

    //SX
    var eyeSx = new THREE.Object3D();
    var eye1Sx = new THREE.Mesh(eyeGeo,eyeMat);
    eye1Sx.position.set(-1, 0.2, 0.4);
    var eye2Sx =  new THREE.Mesh(eyeGeo2,eyeMat2);
    eye2Sx.position.set(-1, 0.2, 0.41);
    eyeSx.add(eye1Sx, eye2Sx);

    var eyeDx = new THREE.Object3D();
    var eye1Dx = new THREE.Mesh(eyeGeo,eyeMat);
    eye1Dx.position.set(-1, 0.2, -0.4);
    var eye2Dx = new THREE.Mesh(eyeGeo2,eyeMat2);
    eye2Dx.position.set(-1, 0.2, -0.41);
    eyeDx.add(eye1Dx, eye2Dx);

    shark.add(body, body2, body3, tailTop, tailBottom, head, eyeSx, eyeDx);

    return shark;
}

function makeColoredFish(dim, textureSquame, texturePinne){

  if(dim==undefined) dim = 1;

  //Container pesce
  fishColored = new THREE.Object3D();

  //corpo pesce
  fishColoredGeo1 = new THREE.BoxGeometry(dim, dim, dim);
  fishColoredGeo2 = new THREE.BoxGeometry(dim*0.8, dim*0.8, dim*0.8);
  fishColoredGeo3 = new THREE.BoxGeometry(dim*0.6, dim*0.6, dim*0.6);

  var fishColoredMaterial = new THREE.MeshBasicMaterial({map: textureSquame});

  var fishColoredMesh1 = new THREE.Mesh(fishColoredGeo1,fishColoredMaterial);
  var fishColoredMesh2 = new THREE.Mesh(fishColoredGeo2,fishColoredMaterial);
  var fishColoredMesh3 = new THREE.Mesh(fishColoredGeo3,fishColoredMaterial);

  //coda pesce
  var tailGeometry = new THREE.BoxGeometry(dim*1.5,dim/2,0.1);
  var pinneMaterial = new THREE.MeshBasicMaterial({map: texturePinne});

  var tailMesh1 = new THREE.Mesh(tailGeometry,pinneMaterial);
  var tailMesh2 = new THREE.Mesh(tailGeometry,pinneMaterial);

  tailMesh1.rotation.z -= 40*Math.PI/180;
  tailMesh2.rotation.z -= 40*Math.PI/180;

  tailMesh1.rotation.y -= 90*Math.PI/180;
  tailMesh2.rotation.y += 90*Math.PI/180;

  fishColored.add(fishColoredMesh1,fishColoredMesh2,fishColoredMesh3,tailMesh1,tailMesh2);

  tailMesh1.position.set(0,dim/2,-dim*1.2);
  tailMesh2.position.set(0,-dim/2,-dim*1.2);
  fishColoredMesh1.position.set(0,0,dim*0.8);
  fishColoredMesh3.position.set(0,0,-dim*0.6);

  //pinna dorsale
  var dorsaleGeometry = new THREE.BoxGeometry(dim,dim/2,0.1);

  var dorsaleMesh = new THREE.Mesh(dorsaleGeometry, pinneMaterial);

  fishColored.add(dorsaleMesh);
  dorsaleMesh.rotation.y += 90*Math.PI/180;
  dorsaleMesh.position.set(0,dim/2,0);


  //pinne laterali
  var pinnaLateraleGeometry = new THREE.BoxGeometry(0.1,dim/2,dim/2);

  var pinnaLateraleMesh1 = new THREE.Mesh(pinnaLateraleGeometry, pinneMaterial);
  var pinnaLateraleMesh2 = new THREE.Mesh(pinnaLateraleGeometry, pinneMaterial);

  fishColored.add(pinnaLateraleMesh1, pinnaLateraleMesh2);

  pinnaLateraleMesh1.rotation.z += 35*Math.PI/180;
  pinnaLateraleMesh2.rotation.z -= 35*Math.PI/180;

  pinnaLateraleMesh1.position.set( dim/2, -dim/2, 0);
  pinnaLateraleMesh2.position.set(-dim/2, -dim/2, 0);


  //occhi
  var eyeGeo = new THREE.BoxGeometry(0.1,0.2,0.2);
  var eyeGeo2 = new THREE.BoxGeometry(0.1,0.1,0.1);
  var eyeMat = new THREE.MeshBasicMaterial({color: 0xffffff});
  var eyeMat2 = new THREE.MeshBasicMaterial({color: 0x000000});

  //SX
  var eyeSx = new THREE.Object3D();
  var eye1Sx = new THREE.Mesh(eyeGeo,eyeMat);
  eye1Sx.position.set(dim/2, 0.2, 1);
  var eye2Sx =  new THREE.Mesh(eyeGeo2,eyeMat2);
  eye2Sx.position.set(dim/2+0.01, 0.2, 1);
  eyeSx.add(eye1Sx, eye2Sx);

  var eyeDx = new THREE.Object3D();
  var eye1Dx = new THREE.Mesh(eyeGeo,eyeMat);
  eye1Dx.position.set(-dim/2, 0.2, 1);
  var eye2Dx = new THREE.Mesh(eyeGeo2,eyeMat2);
  eye2Dx.position.set(-dim/2-0.01, 0.2, 1);
  eyeDx.add(eye1Dx, eye2Dx);

  fishColored.add(eyeDx, eyeSx);

  return fishColored;
}
