
//SNAKE
var widthSquare = 20;
var heightSquare = 20;
var x = 1;
var y = 1;
var snake = [ [2,3],[3,3],[4,3],[5,3],[6,3]]
var canvas = document.querySelector('#canvas')
let direction = 39;
var increX = 1;
var increY = 0;
console.log(canvas)

var context = canvas.getContext('2d')
context.fillStyle = "yellow";
context.fillRect(x*widthSquare,y*heightSquare,widthSquare,heightSquare);

/*
  fillRect(x, y, largeur, hauteur)
     

*/
function drown(time){
  context.clearRect(0,0,canvas.width, canvas.height);
  
    for (let i = 0; i < time.length; i++) {
      const [x, y] = time[i]
      context.fillStyle = "orange"
      context.fillRect(x*widthSquare,y*heightSquare, widthSquare, heightSquare) 
  }

}

// Par defaut le
setInterval(()=>{
    
  
      // snake.shift();
      // snake.push([last[0]+1,last[1]])
      
      MoveSnacke()
      drown(snake)
     

},500)


drown(snake)


function MoveSnacke(){
  let [x, y] = snake[snake.length - 1 ];
  snake.shift()
  snake.push([x+increX, y+increY])
}


function changedirection(keyCode){
       
        
            if (keyCode == 39 && direction != 37) {
                    increX = 1 ;
                    increY = 0;
                    direction = keyCode;
            }
            if (keyCode == 37 && direction != 39){
                       increX = -1;
                       increY = 0;
                       direction = keyCode;

            }
            if (keyCode == 38 && direction != 40){
                      increX = 0;
                      increY = -1;
                      direction = keyCode;
            }
            if (keyCode == 40 && direction != 39){
                      increX = 0;
                      increY = 1;
                      direction = keyCode;
            } 

      
            direction = keyCode;
       

}

document.addEventListener('keyup',(e)=>{
  changedirection(e.keyCode)
})
