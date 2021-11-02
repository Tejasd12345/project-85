canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

cw=100;
ch=170;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

cx=1;
cy=321;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    car_imgTag = new Image();
    car_imgTag.onload = uploadgreencar;
    car_imgTag.src =  greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);

}



function uploadgreencar() {
	ctx.drawImage(car_imgTag,cx,cy, cw, ch);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function left() {
    if (cx>=0) {
        cx=cx-10;
        console.log("when left key pressed x= " +cx + " y= "+cy);
        uploadBackground();
        uploadgreencar();
    }
}
function right() {
    if (cx<=700) {
        cx=cx+10;
        console.log("when right key pressed x= " +cx + " y= "+cy);
        uploadBackground();
        uploadgreencar();
    }
}
function up() {
    if (cy>=0) {
        cy=cy-10;
        console.log("when up key pressed x= " +cx + " y= "+cy);
        uploadBackground();
        uploadgreencar();
    }
}function down() {
    if (cy<=500) {
        cy=cy+10;
        console.log("when down key pressed x= " +cx + " y= "+cy);
        uploadBackground();
        uploadgreencar();
    }
}
