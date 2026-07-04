const images = [
    "./new-main-image-machu-picchu-credit-getty-images.webp",
    "./images.jpg",
    "./images (1).jpg",
    "./images (2).jpg",
    "./images (3).jpg"
];

let index = 0;

const myImg = document.getElementById("my-img");
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");


myImg.src = images[index];


rightBtn.onclick = function () {

    index++;

    if (index >= images.length) {
        index = 0;
    }

    myImg.src = images[index];
}


leftBtn.onclick = function () {

    index--;

    if (index < 0) {
        index = images.length - 1;
    }

    myImg.src = images[index];
}