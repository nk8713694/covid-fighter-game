
function load_images()
{
    enemy_image=new Image;
    enemy_image.src="Assests/v1.png"

    player_image=new Image;
     player_image.src="Assests/player.png"

     gem_image= new Image;
     gem_image.src="Assests/gem.png"
}




function init()
{

    // define the objects that we will have in the game
      
    canvas=document.getElementById('mycanvas')

    W=700;
    H=400;
    game_over=false
    canvas.height=H;
    canvas.width=W;

    pen=canvas.getContext('2d')
    console.log(pen);
    
   
     e1={
        x:150,
        y:50,
        w:60,
        h:60,
        speed:50
    }
    e2={
        x:300,
        y:50,
        w:60,
        h:60,
        speed:40
    }
    e3={
        x:450,
        y:50,
        w:60,
        h:60,
        speed:90
    }

    player={
        x:20,
        y:H/2,
        w:60,
        h:60,
        speed:20,
        moving:"false"
    }

    gem={
        x:W-100,
        y:H/2,
        w:60,
        h:60
    }

    // listen to event on the canvas

    canvas.addEventListener('mousedown',function()
    {
        console.log("mouse pressed");
        player.moving="true"
        
    })
    canvas.addEventListener('mouseup',function()
    {
       
        player.moving="false"
        
    });

   


}

function isOverlap(rect1,rect2)
{

 if (rect1.x < rect2.x + rect2.w && rect1.x + rect1.w> rect2.x &&rect1.y < rect2.y + rect2.h && rect1.y + rect1.h > rect2.y) {
     // collision detected!
     return true;
 }
 return false;
}

function draw()
{
    pen.clearRect(0,0,W,H)
    pen.fillStyle="red"

    //pen.fillRect(box.x,box.y,box.h,box.w)
    
    pen.drawImage(enemy_image,e1.x,e1.y,e1.h,e1.w)
    
    pen.drawImage(enemy_image,e2.x,e2.y,e2.h,e2.w)
2
    pen.drawImage(enemy_image,e3.x,e3.y,e3.h,e3.w)


    pen.drawImage(player_image,player.x,player.y,player.h,player.w)
    

    pen.drawImage(gem_image,gem.x,gem.y,gem.h,gem.w)
}

function update()
{
    // if the player is in moving state:
    if(player.moving=="true")
    {
        player.x+=player.speed;
    }
    // overlap or not:

    if(isOverlap(player,gem))
    {
        alert("u won")
        game_over=true
        return
    }
    if(isOverlap(player,e1)|| isOverlap(player,e2) || isOverlap(player,e3))
    {
        alert("u lost boi better luck next time ")
        game_over=true
        return
    }







    e1.y+=e1.speed;

    if(e1.y < 10)
    {
        e1.speed*=-1;
    }
    if(e1.y>H-e1.h-20)
    {
        e1.speed *=-1;
    }
2
    e2.y+=e2.speed;

    if(e2.y < 10)
    {
        e2.speed*=-1;
    }
    if(e2.y>H-e2.h-20)
    {
        e2.speed *=-1;
    }
    e3.y+=e3.speed;

    if(e3.y < 10)
    {
        e3.speed*=-1;
    }
    if(e3.y>H-e3.h-20)
    {
        e3.speed *=-1;
    }
    

}


function gameloop()
{
    console.log("in gamelooop");
    if(game_over==true)
    {
        clearInterval(f)
    }
    draw();
    update();

}
load_images();

init();

var f=setInterval(gameloop,100)