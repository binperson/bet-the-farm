//robot demo tweening
function openGate() {
  var target = { z: Math.PI/2 };
  var gateOpen = new TWEEN.Tween(StartGate[0].rotation)
      .to(target, 1000);
  return gateOpen;
}

var allTweens = [];
function demoRun() {
  // Open Gate
  allTweens.push( openGate() );
  allTweens[0].start();
}
