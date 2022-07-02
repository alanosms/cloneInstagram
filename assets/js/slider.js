var phoneImg = document.getElementById("slider");

phoneImg.src = "assets/img/pic1.png";
var index = 0;
var images = [];

images[0] = "assets/img/pic1.png";
images[1] = "assets/img/pic2.png";
images[2] = "assets/img/pic3.png";
images[3] = "assets/img/pic4.png";

function changeImage() {
   phoneImg.src = images[index];

   index = (index + 1) % images.length; 
}
var intervalControl = setInterval(changeImage, 3000);