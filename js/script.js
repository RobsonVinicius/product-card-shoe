const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');

function changeSize() {
  sizes.forEach(size => size.classList.remove('active'));
  this.classList.add('active');
}

function changeColor() {
  colors.forEach(c => c.classList.remove('active'));
  this.classList.add('active');
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));