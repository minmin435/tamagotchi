const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const frames = ["chick_normal.png", "chick_happy.png", "chick_sleepy.png", "chick_sleepy_closed.png", "chick_sick.png"];
let currentFrame = 0;

let hunger = 50, happiness = 50, cleanliness = 50, energy = 50;

function draw() {
  const img = new Image();
  img.src = "img/" + frames[currentFrame];
  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 100, 100, 100, 100);
  };
  updateStatus();
}

function updateStatus() {
  document.getElementById("hunger").innerText = hunger;
  document.getElementById("happiness").innerText = happiness;
  document.getElementById("cleanliness").innerText = cleanliness;
  document.getElementById("energy").innerText = energy;
}

function feed() {
  hunger = Math.min(100, hunger + 10);
  currentFrame = 1;
  draw();
}
function play() {
  happiness = Math.min(100, happiness + 10);
  energy = Math.max(0, energy - 5);
  currentFrame = 1;
  draw();
}
function clean() {
  cleanliness = 100;
  currentFrame = 0;
  draw();
}
function sleep() {
  energy = Math.min(100, energy + 20);
  currentFrame = 3;
  draw();
}

setInterval(() => {
  hunger = Math.max(0, hunger - 1);
  happiness = Math.max(0, happiness - 1);
  cleanliness = Math.max(0, cleanliness - 1);
  energy = Math.max(0, energy - 1);
  currentFrame = 0;
  draw();
}, 5000);

draw();
