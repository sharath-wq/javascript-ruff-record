function changeColor() {
  let bgColors = new Array();

  bgColors[0] = "red";
  bgColors[1] = "green";
  bgColors[2] = "blue";
  bgColors[3] = "yellow";
  bgColors[4] = "orange";
  document.body.style.backgroundColor = bgColors[Math.floor(Math.random() * 5)];
}
