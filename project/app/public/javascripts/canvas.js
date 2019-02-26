const CANVAS_W = 120;
const CANVAS_H = 10;
var ctx;
var lineStatus = 1;

function init() {
  ctx = document.getElementById('canvas').getContext('2d')
}

function draw() {
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, CANVAS_W, CANVAS_H)
  ctx.strokeStyle = "green"
  ctx.lineWidth = 5;
  ctx.beginPath()
  ctx.setLineDash([5, 10])
  if (lineStatus) {
    ctx.moveTo(0, 5)
    lineStatus = 0
  } else {
    ctx.moveTo(5, 5)
    lineStatus = 1
  }
  ctx.lineTo(120, 5)
  ctx.stroke()
}

function clearCanvas() {
  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
}
