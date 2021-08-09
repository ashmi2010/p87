
var canvas=new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var blockImageObject= "";

function new_image(getImage)
{
	fabric.Image.fromURL(getImage, function (Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(block_image_width);
        blockImageObject.scaleToHeight(block_image_height);
        blockImageObject.set({
            top: block_y,
            left: block_x
        });
        canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png');
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
		console.log("b");
	}
	
}

