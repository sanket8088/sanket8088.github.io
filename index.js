setInterval(function () {
    var a = document.getElementById("hour");
    var hour = new Date().getHours().toString()
    var h = (hour.length > 1) ? hour : hour = 0 + hour
    a.innerText = h + ":";
    var b = document.getElementById("minute");
    var minutes = new Date().getMinutes().toString()
    var m = (minutes.length > 1) ? minutes : minutes = 0 + minutes
    b.innerText = m + ":";
    var c = document.getElementById("sec");
    var seconds = new Date().getSeconds().toString();
    var s = (seconds.length > 1) ? seconds : seconds = 0 + seconds
    c.innerText = s;


}, 1000)


var clock = document.getElementById("time")
var heartRate = document.getElementById("heart-rate")
var red = document.getElementById("red")
var blue = document.getElementById("blue")
var purple = document.getElementById("purple")
var black = document.getElementById("black")
var pink = document.getElementById("pink")
var imageSource = document.getElementById("watch-pic")

clock.addEventListener("click", function () {
    var reveal = document.getElementById("clock")
    reveal.style.display = "block";
    var hideOne = document.getElementById("heart-beat")
    var hideTwo = document.getElementById("heart-rate-number")
    hideOne.style.display = "none"
    hideTwo.style.display = "none"
})


heartRate.addEventListener("click", function () {
    var reveal = document.getElementById("clock")
    reveal.style.display = "none";
    var hideOne = document.getElementById("heart-beat")
    var hideTwo = document.getElementById("heart-rate-number")
    hideOne.style.display = "block"
    hideTwo.style.display = "block"
})


red.addEventListener("click", function () {
    imageSource.src = "./assets/red.png"
})
black.addEventListener("click", function () {
    imageSource.src = "./assets/black.png"
})
purple.addEventListener("click", function () {
    imageSource.src = "./assets/purple.png"
})
blue.addEventListener("click", function () {
    imageSource.src = "./assets/blue.png"
})
pink.addEventListener("click", function () {
    imageSource.src = "./assets/pink.png"
})



