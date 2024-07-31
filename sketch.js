let collectionOfColors = ["red", "lightyellow", "green","teal","orange","purple"];
let walkingTeam = [];

for (let t = 0; t < collectionOfColors.length; t++) {
    walkingTeam.push(new Walker(900, 500, 20, collectionOfColors[t]));
    // console.log(walkingTeam.length);
}

function setup() {
  createCanvas(1920, 1080);
  background("black");
  frameRate(500);

  }

function draw() {
  // make my traveller do 1 step on each frame
  for (let t = 0; t < walkingTeam.length; t++) {
    walkingTeam[t].jump();
  }
  // let i = 0;
  // while(i<walkingTeam.length){
  //   walkingTeam[i].jump();
  //   i++;
  // }
//   walkingTeam[3].jump();
// console.log(walkingTeam[4].coloring);
}
