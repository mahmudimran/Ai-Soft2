
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img1").src = element.src;
  document.getElementById("modal1").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
