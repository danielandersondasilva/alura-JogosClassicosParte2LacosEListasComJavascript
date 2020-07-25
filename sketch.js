let imagemDaEstrada;

function preload() {
  imagemDaEstrada = loadImage("imagem/estrada.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
}
