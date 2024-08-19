function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("rgb(177,121,177)");
  fill("lightblue");
  textSize(64);
  textAlign(CENTER,CENTER);
  let maximo = width;
  let minimo = 0;
  let palavra = "Física é top<3"
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0,quantidade);
  text(parcial,200,200);

// if mouseX < 50){
// let palavra = "N";
// text(palavra, 200, 200);
// } else {
 // let palavra = "NICOLLY<3";
  // text(palavra, 200, 200);
// }
}
