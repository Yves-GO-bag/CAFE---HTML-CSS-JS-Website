const img = document.getElementById("swivelImage");

let angle = 0;
let direction = 1;

function animate() {
  angle += 0.1 * direction;

  if (angle > 10 || angle < -10) {
    direction *= -1;
  }

  img.style.transform = `rotate(${angle}deg)`;

  requestAnimationFrame(animate);
}

animate();