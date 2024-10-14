function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  let gridSize = 20;

  let speed = map(mouseX, 0, width, 0.05, 0.5);

  let maxSize = map(mouseY, 0, height, 10, gridSize);

  for (let y = 0; y < height; y += gridSize) {
    for (let x = 0; x < width; x += gridSize) {
      let offset = dist(x, y, width / 2, height / 2) * 0.05;
      let size = map(sin(frameCount * speed + offset), -1, 1, 10, maxSize);

      let r = map(x, 0, width, 50, 255);
      let g = map(y, 0, height, 50, 255);
      let b = map(sin(frameCount * 0.1 + offset), -1, 1, 100, 255);

      fill(r, g, b);

      ellipse(x + gridSize / 2, y + gridSize / 2, size, size);
    }
  }
}
