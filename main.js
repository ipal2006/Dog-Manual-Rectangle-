img="";
function preload()
{
   img = loadImage('dog_cat.jpg');
}

function setup()
{
    canvas = createCanvas(650,450);
    canvas.center();
}

function draw()
{
    image(img,0,0,650,450);
    fill("#0a0885");
    stroke("#0a0885");
    noFill();
    rect(30,64,430,375);
    text("Dog",60,80);
}