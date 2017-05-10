"use strict"
//toggle info
let info = document.getElementsByClassName("Info")[0]
let intro = document.getElementsByClassName("IntroSection")[0]

info.addEventListener("click", function() {
	intro.classList.toggle("visible")
})
//timelinearrow
let section = document.getElementsByClassName('SocialOrganizationSection')[0]
let wrapper = document.getElementsByClassName('Wrapper')[0]
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var running = false;

var ball = {
  x: 75,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: 'blue',
  draw: function() {

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

  }
};

function clear() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  ball.draw();
}

wrapper.addEventListener('mousemove', function(e) {
  if (!running) {
    clear()
    ball.x = e.offsetY;
    ball.draw();
  }

}, true);


ball.draw()

