
// JavaScript functions to hide and show the image
var imageId=document.getElementById('myImage');
function hideImage(e) {
   imageId.style.opacity = '0';
}

function showImage(e) {
   imageId.style.opacity = '1';
}
document.getElementById("myImage")
.addEventListener("mouseover",hideImage);
document.getElementById("myImage")
.addEventListener("mouseout",showImage);