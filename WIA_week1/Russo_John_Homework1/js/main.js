/*
     Name: John Russo
     Date: 11 Sep 2014
     Class & Section:  WIA-1409
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

window.onload = function() {

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message

if(Moder)



/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a height of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

    var theCanvas1 = document.getElementById('recCan');
    if (theCanvas1 && theCanvas1.getContext) {
        var ctx1 = theCanvas1.getContext("2d");
        if (ctx1) {

            ctx1.strokeStyle = "black";
            ctx1.lineWidth = 3;
            ctx1.strokeRect(0,0,50,100);

            ctx1.fillStyle = "blue";
            ctx1.fillRect(0,0,50,100);
        }
    }


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

    var theCanvas2 = document.getElementById('cirCan');
    if (theCanvas2 && theCanvas2.getContext) {
        var ctx2 = theCanvas2.getContext("2d");
        if (ctx2) {

            ctx2.strokeStyle = "black";
            ctx2.fillStyle = "rgba(255,0,0,0.5)";
            ctx2.lineWidth = 2;

            var degrees = 360;
            var radians = (degrees/180)*Math.PI;

            ctx2.beginPath();
            ctx2.arc(50,50,30,0, radians);
            ctx2.fill();
            ctx2.stroke();

        }
    }




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

    var theCanvas3 = document.getElementById('patCan');
    if (theCanvas3 && theCanvas3.getContext) {
        var ctx3 = theCanvas3.getContext("2d");
        if (ctx3) {

            ctx3.lineWidth = 5;
            ctx3.strokeStyle = "black";
            ctx3.fillStyle="rgba(0,255,0,0.5)";

            ctx3. lineJoin = "miter";

            ctx3.miterLimit = 3;

            ctx3.beginPath();
            ctx3.moveTo(100,100);
            ctx3.lineTo(180,100);
            ctx3.lineTo(210,20);
            ctx3.lineTo(240,100);
            ctx3.lineTo(330,100);
            ctx3.lineTo(260,150);
            ctx3.lineTo(280,240);
            ctx3.lineTo(210,180);
            ctx3.lineTo(140,240);
            ctx3.lineTo(160,150);
            ctx3.closePath();
            ctx3.fill();



            ctx3.stroke();


        }
    }


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

    var theCanvas4 = document.getElementById('bezCan');
    if (theCanvas4 && theCanvas4.getContext) {
        var ctx4 = theCanvas4.getContext("2d");
        if (ctx4) {

            ctx4.strokeStyle = "black";
            ctx4.lineWidth = 5;
            ctx4.fillStyle = "orange";
            ctx4.fillStyle = "orange";


            ctx4.beginPath();
            ctx4.moveTo(25,200);
            ctx4.bezierCurveTo(75,100, 125, 300, 175, 200);
            ctx4.bezierCurveTo(225,100, 275, 300, 325, 200);
            ctx4.bezierCurveTo(375,100, 425, 300, 475, 200);
            ctx4.bezierCurveTo(425,5, 25, 5, 25, 200);

            ctx4.stroke();
            ctx4.fill();

        }
    }

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

    var theCanvas5 = document.getElementById('txtCan');
    if (theCanvas5 && theCanvas5.getContext) {
        var ctx5 = theCanvas5.getContext("2d");
        if (ctx5) {

            var theString = "This is Blurry";
            ctx5.font="46pt Times New Roman";
            ctx5.fillStyle = "yellow";
            ctx5.strokeStyle = "rgba(0, 0, 255, .5)";
            ctx5.fillText(theString, 28, 168);
            ctx5.strokeText(theString, 20, 160);
            ctx5.strokeText(theString, 22, 162);
            ctx5.strokeText(theString, 24, 164);
            ctx5.strokeText(theString, 26, 166);
            ctx5.strokeText(theString, 28, 168);



        }
    }

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

    var theCanvas6 = document.getElementById('imgCan');
    if (theCanvas6 && theCanvas6.getContext) {
        var ctx6 = theCanvas6.getContext("2d");
        if (ctx6) {

            var srcImg = document.getElementById("logo");

            ctx6.drawImage(srcImg, 0,0);
            ctx6.drawImage(srcImg, 0,0, 1650, 544);
            ctx6.drawImage(srcImg, 2500, 160, 236, 243, 25, 25, 118, 122);


        }
    }



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

    var theCanvas7 = document.getElementById('comboCan');
    if (theCanvas7 && theCanvas7.getContext) {
        var ctx7 = theCanvas7.getContext("2d");
        if (ctx7) {

            ctx7.save();

            ctx7.lineWidth = 3;
            ctx7.strokeStyle = "black";
            ctx7.fillStyle = "darkblue";

            ctx7.beginPath();
            ctx7.moveTo(100, 200);
            ctx7.lineTo(300, 200);
            ctx7.arc(300,200,200,0, Math.PI,false);
            ctx7.lineTo(100,100);
            ctx7.bezierCurveTo(5,5,595,5,500,100);
            ctx7.lineTo(500,200);
            ctx7.closePath()
            ctx7.stroke();
            ctx7.fill();

            ctx7.restore();

            ctx7.lineWidth = 5;
            ctx7.strokeStyle ="white";

            ctx7.moveTo(245,180);
            ctx7.lineTo(245,70);
            ctx7.lineTo(345,180);
            ctx7.lineTo(345,70);
            ctx7.stroke();


            ctx7.moveTo(295,180);
            ctx7.lineTo(295,110);
            ctx7.stroke();

            ctx7.moveTo(255,70);
            ctx7.bezierCurveTo(340,125,250,125,340,70);
            ctx7.stroke();






        }
    }

};
