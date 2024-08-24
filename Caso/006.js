let index = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

document.querySelector('.next').addEventListener('click', () => {
  index = (index + 1) % totalImages;
  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  index = (index - 1 + totalImages) % totalImages;
  updateCarousel();
});

function updateCarousel() {
  document.querySelector('.carousel-images').style.transform = `translateX(-${index * 100}%)`;
}
let likeCount = 0;

function incrementLike() {
  likeCount++;
  document.getElementById('like-count').innerText = ` Curtir: ${likeCount}`;
}
let likeOne = 0;
function liking() {
likeOne++;
document.getElementById('liker').innerText = ` Curtir: ${likeOne}`;}

let likes = 0;
function thelike() {
likes++;
document.getElementById('liketwo').innerText = ` Curtir: ${likes}`;}
let likeme = 0;
function itlike() {
likeme++;
document.getElementById('likeit').innerText = ` Curtir: ${likeme}`;}
