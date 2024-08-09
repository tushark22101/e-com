document.addEventListener('DOMContentLoaded', () => {
    var MainImg = document.getElementById("MainImg");
    var smallImgs = document.getElementsByClassName("small-img");

    for (let i = 0; i < smallImgs.length; i++) {
        smallImgs[i].onclick = function() {
            MainImg.src = smallImgs[i].src;
        }
    }
});
function redirectToProductPage(url) {
    window.location.href = url;
}

var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");

btn1.onclick = function() {
    slide.style.transform = "translateX(0%)";
    setActiveIndicator(btn1);
}
btn2.onclick = function() {
    slide.style.transform = "translateX(-100%)";
    setActiveIndicator(btn2);
}
btn3.onclick = function() {
    slide.style.transform = "translateX(-200%)";
    setActiveIndicator(btn3);
}
btn4.onclick = function() {
    slide.style.transform = "translateX(-300%)";
    setActiveIndicator(btn4);
}

function setActiveIndicator(activeBtn) {
    document.querySelectorAll('.indicators span').forEach(function(span) {
        span.classList.remove('active');
    });
    activeBtn.classList.add('active');
}
