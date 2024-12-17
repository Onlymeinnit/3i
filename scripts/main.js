"use strict";

const menu = document.getElementById("menu-button");
const menuList = document.getElementById("menu-list");
const body = document.body;

menu.onclick = () => {
  menuList.style.height === "0px"
    ? (menuList.style.height = "285px")
    : (menuList.style.height = "0px");
};

body.onscroll = () => {
  menuList.style.height = "0px";
};

const welcomeImage = document.getElementById("welcome-image");

function image1() {
  welcomeImage.setAttribute("src", "full-front-view.jpg");
}

function image2() {
  welcomeImage.setAttribute("src", "first-room-image.jpg");
}

function image3() {
  welcomeImage.setAttribute("src", "dishes-1.jpg");
}

function image4() {
  welcomeImage.setAttribute("src", "3I-bar.jpg");
}

const images = [image1, image2, image3, image4];
let index = 0;

function changeImages() {
  images[index]();
  index = (index + 1) % images.length;

  setTimeout(changeImages, 5000);
}

changeImages();

const senderName = document.getElementById("sender-name");
const senderEmail = document.getElementById("sender-email);
const senderMessage = document.getElementById("sender-message);                                
const receiver = document.getElementById("3i-email");

receiver.addEventListener("click", function () {
  receiver.setAttribute("href", "mailto:okonjie4@gmail.com?cc=okonjie4@gmail.com&bcc=okonjie4@gmail.com&subject=${senderName}&body=${senderMessage}");
});
