var mouse_event="empty";
var last_positionX,last_positionY;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2D");

colour="purple";
widthofline=10;

canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
    mouse_event="mouseDown";
}
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouse_event="mouseUp";
}
canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
    mouse_event="mouseLeave";
}
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
    currentPositionX = e.clientX - canvas.offsetLeft;
    currentPositionY = e.clientY - canvas.offsetTop;
    if(mouse_event=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthofline;
        console.log("last_position of X, last_position of Y");
        console.log("x="+ last_positionX + "Y=" + last_positionY);
        ctx.moveTo(last_positionX,last_positionY);

        console.log("current_position of X, current_position of Y");
        console.log("x="+ currentPositionX + "Y=" + currentPositionY);
        ctx.lineTo(currentPositionX,currentPositionY);
        ctx.stroke();
    }
    last_positionX=currentPositionX;
    last_positionY=currentPositionY;
}