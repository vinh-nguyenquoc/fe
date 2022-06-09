var img = document.querySelector(".img");
var arr = ["house.jpg", "ho.jpg"];
var i = 0;

function next() {
  if (i >= arr.length - 1) i = -1;
  i++;
  return setimg();
}
function prev() {
  if (i <= 0) i = arr.length;
  i--;
  return setimg();
}
function setimg() {
  return img.setAttribute("src", "images/" + arr[i]);
}
