var mouseEvent="empty";
var last_x, last_y;
canvas=document.getElementById("Canvas");
ctx=canvas.getContext("2d");
color="black";
line_width=2;
canvas.addEventListener("mouseDown",my_mouseDown);
function my_mouseDown(e)
{
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseUp",my_mouseUp);
function my_mouseUp(e)
{
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;

       console.log("Last position of x and y coordinates=");
       console.log("x= " + last_x + "y= " + last_y);
       ctx.moveTo(last_x,last_y)

       console.log("Current position of x and y coordinates=");
       console.log("x= "+ current_position_of_mouse_x + "y= "+ current_position_of_mouse_y);
       ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
       ctx.stroke();
    }

    last_x=current_position_of_mouse_x;
    last_y=current_position_of_mouse_y;
}

