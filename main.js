canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown",mousedown);
canvas.addEventListener("mousemove", mousemove);
canvas.addEventListener("mouseup", mouseup);
canvas.addEventListener("mouseleave", mouseleave);
color = "green";
mousee = ""
cmousex = 0
cmousey = 0
lmousex = 0
lmousey = 0
function Clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function mouseleave(event)
{mousee = "mouseleave"}
function mouseup (event)
{
    mousee = "mouseup" }
function mousemove (event)
{
    cmousex = event.clientX - canvas.offsetLeft;
    cmousey = event.clientY - canvas . offsetTop;
    console.log(" X = " + cmousex + " ,Y = " + cmousey);
   if (mousee=="mousedown") {
 draw()      
   }
   lmousex = cmousex
   lmousey = cmousey
}
function mousedown(event)
{
color = document.getElementById("colorInput").value;
width_input = document.getElementById("width_input").value;
radius = document.getElementById("radiusInput").value;
mousee = "mousedown"
}

function draw()
{

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_input;
ctx.arc(cmousex, cmousey, radius, 0, 2 * Math.PI);
ctx.stroke();
}