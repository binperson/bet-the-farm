var StartGate = [];

function initKatelyn() {
  addFloor();
  for (var i=0; i<4; ++i) {
    var phi = i*Math.PI/2;
    addOuterWalls(i);
    addStartBox(i);
    addWaterValve(i);
    addFloorTape(i);
    
  }
  addStartGate(0);
}

//geometry here

function addFloor() {
  //floor
  var floorGeom = new THREE.BoxGeometry(284.75, 284.75, 1.0);
  var floorMat = new THREE.MeshLambertMaterial({color: 0x99ccff});
  var floorMesh = makeBoxMesh(floorGeom, floorMat, 0);
  //move floorMesh down so that its top is at z=0
  floorMesh.translateZ(-0.5);
  floorMesh.receiveShadow = useShadows;
  
  scene.add(floorMesh);
}

function addOuterWalls(i) {
  var phi = i*Math.PI/2;
  var wallGeom = new THREE.BoxGeometry(283.75, 1, 4);
  var wallMesh = makeBoxMesh(wallGeom, colorMats[i]);
  wallMesh.rotateOnAxis(zAxis, phi)
  wallMesh.translateZ(2);
  wallMesh.translateX(0.5);
  wallMesh.translateY(141.875);
  scene.add(wallMesh);
}

function addStartBox (i) {
  var phi = i*Math.PI/2;
  var wallShortGeom = new THREE.BoxGeometry(25.375, 0.75, 5.5);
  var wallLongGeom = new THREE.BoxGeometry(28, 0.75, 5.5);
  var wallBackGeom = new THREE.BoxGeometry(0.75, 27.5, 5.5);
  var wallShort = makeBoxMesh(wallShortGeom, colorMats[i]);
  var wallLong = makeBoxMesh(wallLongGeom, colorMats[i]);
  var wallBack = makeBoxMesh(wallBackGeom, colorMats[i]);
  
  wallShort.rotateOnAxis(zAxis, phi);
  wallShort.translateZ(2.75);
  wallShort.translateY(113.85);
  wallShort.translateX(i%2 == 0? - 25 : 25);
  
  wallLong.rotateOnAxis(zAxis, phi);
  wallLong.translateZ(2.75);
  wallLong.translateY(140.6);
  wallLong.translateX(i%2 == 0? - 23.625 : 23.625);
  
  wallBack.rotateOnAxis(zAxis, phi);
  wallBack.translateZ(2.75);
  wallBack.translateY(127.25);
  wallBack.translateX(i%2 == 0? - 38 : 38);
  
  scene.add(wallShort);
  scene.add(wallLong);
  scene.add(wallBack);
}
function addStartGate(i) {
  var phi = i*Math.PI/2;
  var startGate = new THREE.Object3D();
  
  var gateAcrossGeom = new THREE.CylinderGeometry(0.5, 0.5, 24.75);
  var gateSideGeom = new THREE.CylinderGeometry(0.5, 0.5, 5);
  var gateAcross1 = makeCylinderMesh(gateAcrossGeom, pvcMat);
  var gateAcross2 = makeCylinderMesh(gateAcrossGeom, pvcMat);
  var gateAcross3 = makeCylinderMesh(gateAcrossGeom, pvcMat);
  var gateSide1 = makeCylinderMesh(gateSideGeom, pvcMat);
  var gateSide2 = makeCylinderMesh(gateSideGeom, pvcMat);

  gateAcross1.translateZ(6);
  gateAcross1.translateY(-12.25)

  gateAcross2.translateZ(3.5);
  gateAcross2.translateY(-12.25);

  gateAcross3.translateZ(1);
  gateAcross3.translateY(-12.25)

  gateSide1.rotateOnAxis(xAxis, Math.PI/2);
  gateSide1.translateY(3.5);
  //gateSide1.translateZ(-12.25);
  
  gateSide2.rotateOnAxisi(xAxis, Math.PI/2);
  gateSide2.translateY(3.5);
  gateSide2.translateZ(24.5);
  
  startGate.add(gateAcross1);
  startGate.add(gateAcross2);
  startGate.add(gateAcross3);
  startGate.add(gateSide1);
  startGate.add(gateSide2);
  
  startGate.rotateOnAxis(zAxis, phi);
  startGate.translateY(139.75);
  startGate.translateX(i%2 == 0? - 11.5 : 11.5);
  
  scene.add(startGate);
  StartGate.push(startGate);
}

function addWaterValve (i) {
  var phi = i*Math.PI/2;
  
  var armGeom = new THREE.CylinderGeometry(0.5, 0.5, 3.5);
  var crossGeom = new THREE.CylinderGeometry(0.75, 0.75, 3);
  
  for (j=0; j<4; j++) {
      var waterValve = new THREE.Object3D;
      
      var arm1 = makeCylinderMesh(armGeom, pvcMat);
      var arm2 = makeCylinderMesh(armGeom, pvcMat);
      var arm3 = makeCylinderMesh(armGeom, pvcMat);
      var arm4 = makeCylinderMesh(armGeom, pvcMat);
      var cross1 = makeCylinderMesh(crossGeom, pvcMat);
      var cross2 = makeCylinderMesh(crossGeom, pvcMat);
      
      arm1.rotateOnAxis(xAxis, Math.PI/2);
      arm1.translateY(2);
      arm2.rotateOnAxis(xAxis, Math.PI/2);
      arm2.translateY(7);

      arm3.translateZ(4.5);
      arm3.translateY(2.5);
  
      arm4.translateZ(4.5);
      arm4.translateY(-2.5);
  
      cross1.rotateOnAxis(xAxis, Math.PI/2);
      cross1.translateY(4.5);
      
      cross2.translateZ(4.5);
      
      waterValve.add(arm1);
      waterValve.add(arm2);
      waterValve.add(arm3);
      waterValve.add(arm4);
      waterValve.add(cross1);
      waterValve.add(cross2);
      
      waterValve.rotateOnAxis(zAxis, Math.PI/4+j*Math.PI/2);
      waterValve.translateX(-22);
      scene.add(waterValve);
      
  }
  /*    
  waterValve1.add(arm1);
  waterValve1.add(arm2);
  waterValve1.add(arm3);
  waterValve1.add(arm4);
  waterValve1.add(cross1);
  waterValve1.add(cross2);
  
  waterValve2.add(arm1);
  waterValve2.add(arm2);
  waterValve2.add(arm3);
  waterValve2.add(arm4);
  waterValve2.add(cross1);
  waterValve2.add(cross2);
  
  waterValve1.rotateOnAxis(zAxis, Math.PI/4);
  waterValve1.translateX(22);
  
  waterValve2.rotateOnAxis(zAxis, Math.PI/-4);
  waterValve2.translateX(22);
  
  scene.add(waterValve1);
  scene.add(waterValve2);
  */
}

function addFloorTape(i) {
  var phi = i*Math.PI/2;
  
  var startBox = new THREE.Object3D;
  var pigTape1 = new THREE.Object3D;
  var pigTape2 = new THREE.Object3D;
  var pigTape3 = new THREE.Object3D;
  var pigTape4 = new THREE.Object3D;
  var pigTape5 = new THREE.Object3D;
  var tagZone = new THREE.Object3D;
  
  var tagZoneLongGeom = new THREE.BoxGeometry(2, 76, 0.125);
  var tagZoneShortGeom = new THREE.BoxGeometry(2, 36, 0.125);
  var tagZoneLong = new makeBoxMesh(tagZoneLongGeom, colorMats[i]);
  var tagZoneShort1 = new makeBoxMesh(tagZoneShortGeom, colorMats[i]);
  var tagZoneShort2 = new makeBoxMesh(tagZoneShortGeom, colorMats[i]);
  
  var pigTapeGeom = new THREE.BoxGeometry(2, 8, 0.125);
  var pigTapeMesh1a = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  var pigTapeMesh1b = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  var pigTapeMesh2a = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  var pigTapeMesh2b = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  var pigTapeMesh3a = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  var pigTapeMesh3b = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  var pigTapeMesh4a = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  var pigTapeMesh4b = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  var pigTapeMesh5a = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  var pigTapeMesh5b = new makeBoxMesh(pigTapeGeom, colorMats[i]);
  
  var startTapeLongGeom = new THREE.BoxGeometry(2, 67, 0.125);
  var startTapeShortGeom = new THREE.BoxGeometry(2, 27.5, 0.125);
  var startTapeLong = new makeBoxMesh(startTapeLongGeom, colorMats[i]);
  var startTapeShort = new makeBoxMesh(startTapeShortGeom, colorMats[i]);
  
  tagZoneShort1.rotateOnAxis(zAxis, Math.PI/-4);
  tagZoneShort1.translateX(41);
  tagZoneShort1.translateY(-4);
  tagZoneShort2.rotateOnAxis(zAxis, Math.PI/4);
  tagZoneShort2.translateX(-41);
  tagZoneShort2.translateY(-4);
  tagZoneLong.rotateOnAxis(zAxis, Math.PI/2);
  
  tagZone.add(tagZoneLong);
  tagZone.add(tagZoneShort1);
  tagZone.add(tagZoneShort2);
  tagZone.rotateOnAxis(zAxis, phi);
  tagZone.translateZ(0.0625);
  tagZone.translateY(60);
  
  startTapeLong.rotateOnAxis(zAxis, Math.PI/2);
  startTapeShort.translateX(i%2 == 0? + 32.5 : -32.5);
  startTapeShort.translateY(13.75);
  
  startBox.add(startTapeShort);
  startBox.add(startTapeLong);
  startBox.rotateOnAxis(zAxis, phi);
  startBox.translateZ(0.0625);
  startBox.translateX(i%2 == 0? + 21 : -21);
  startBox.translateY(114);
  
  pigTapeMesh1b.rotateOnAxis(zAxis, Math.PI/2);
  pigTapeMesh2b.rotateOnAxis(zAxis, Math.PI/2);
  pigTapeMesh3b.rotateOnAxis(zAxis, Math.PI/2);
  pigTapeMesh4b.rotateOnAxis(zAxis, Math.PI/2);
  pigTapeMesh5b.rotateOnAxis(zAxis, Math.PI/2);
  
  pigTape1.add(pigTapeMesh1a);
  pigTape1.add(pigTapeMesh1b);
  pigTape2.add(pigTapeMesh2a);
  pigTape2.add(pigTapeMesh2b);
  pigTape3.add(pigTapeMesh3a);
  pigTape3.add(pigTapeMesh3b);
  pigTape4.add(pigTapeMesh4a);
  pigTape4.add(pigTapeMesh4b);
  pigTape5.add(pigTapeMesh5a);
  pigTape5.add(pigTapeMesh5b);
  
  pigTape1.rotateOnAxis(zAxis, phi);
  pigTape1.translateZ(0.0625);
  pigTape1.translateX(i%2 == 0? - 54 : 54);
  pigTape1.translateY(113);
  
  pigTape2.rotateOnAxis(zAxis, phi);
  pigTape2.translateZ(0.0625);
  pigTape2.translateX(i%2 == 0? - 40 : 40);
  pigTape2.translateY(83);
  
  pigTape3.rotateOnAxis(zAxis, phi);
  pigTape3.translateZ(0.0625);
  pigTape3.translateX(i%2 == 0? - 13 : 13);
  pigTape3.translateY(83);
  
  pigTape4.rotateOnAxis(zAxis, phi);
  pigTape4.translateZ(0.0625);
  pigTape4.translateX(i%2 == 0? + 21 : -21);
  pigTape4.translateY(93);
  
  pigTape5.rotateOnAxis(zAxis, phi);
  pigTape5.translateZ(0.0625);
  pigTape5.translateX(i%2 == 0? + 40 : -40);
  pigTape5.translateY(130);
  
  scene.add(startBox);
  scene.add(tagZone);
  scene.add(pigTape1);
  scene.add(pigTape2);
  scene.add(pigTape3);
  scene.add(pigTape4);
  scene.add(pigTape5);
}