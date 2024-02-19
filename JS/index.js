var canvas;
var ctx;
var w = 500;
var h = 400;

setUpCanvas();
background();

function setUpCanvas() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "2px dotted red";
}

function background(){
    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, w, h);
    }  

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(w/2, h);
    ctx.lineTo(w,0);
    ctx.stroke();


console.log("Resource Web!!");
