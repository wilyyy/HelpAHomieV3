// let home = document.querySelector(".home");
// function hidePage(){
//     this.style.position = "static";
//     this.style.right = "0px";
// }

// home.onclick = hidePage();

document.querySelector(".door-screen1").innerHTML += TriangleButtonUI();
document.querySelector(".door-screen1").innerHTML += DoorUI()
document.querySelector(".door-screen1").innerHTML += TriangleButtonUI("images/Circle-Triangle-UpsideDown.png");

document.querySelector(".door-screen2").innerHTML += TriangleButtonUI();
document.querySelector(".door-screen2").innerHTML += DoorUI("Stacy");
document.querySelector(".door-screen2").innerHTML += TriangleButtonUI("images/Circle-Triangle-UpsideDown.png");

document.querySelector(".door-screen3").innerHTML += TriangleButtonUI();
document.querySelector(".door-screen3").innerHTML += DoorUI("Greg");
document.querySelector(".door-screen3").innerHTML += TriangleButtonUI("images/Circle-Triangle-UpsideDown.png");




