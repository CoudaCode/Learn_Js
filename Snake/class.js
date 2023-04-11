
class Snake {
  constructor(body, direction) {
    this.body = body;
    this.direction = direction;
    this.widthSquare = 20;
    this.heightSquare = 20;
    this.incre_x = 1;
    this.incre_y = 0;
    this.countApple = 0;
  }


  
 
//Drawn :fonction pour dessiner le serpent
  drawn(context) {
    // context.clearRect(0,0,canvas.width, canvas.height);
    
    for (let i = 0; i < this.body.length; i++) {
      const [x, y] = this.body[i];
      context.fillStyle = "orange";
      context.fillRect(
        x * this.widthSquare,
        y * this.heightSquare,
        this.widthSquare,
        this.heightSquare
      );
    }
  }

  Move(canvasWidth, canvasHeight) {
    let [x, y] = this.body[this.body.length - 1];

    let elem = x + this.incre_x;

    let elem1 = y + this.incre_y;

    this.body.shift();
    // this.body.push([x + this.increX, y + this.increY]);

    if (elem < 0) {
      elem = Math.floor(canvasWidth / this.widthSquare) - 1;
    }
    if (elem === Math.floor(canvasWidth / this.widthSquare)) {
      elem = 0;
    }

    if (elem1 < 0) {
      elem1 = Math.floor(canvasHeight / this.heightSquare) - 1;
    }
    if (elem1 === Math.floor(canvasHeight / this.heightSquare)) {
      elem1 = 0;
    }

    this.body.push([elem, elem1]);
  }


  // Pour les changement de directions avec les codes des touches
  change_direction(keyCode){
    if(keyCode == 39 && this.direction != 37){
        this.incre_x =1;
        this.incre_y= 0;
        this.direction = keyCode;
    }
    if(keyCode == 37 && this.direction != 39){
        this.incre_x =-1;
        this.incre_y= 0;
        this.direction = keyCode;
    }
    if(keyCode == 38 && this.direction != 40){
        this.incre_x =0;
        this.incre_y= -1;
        this.direction = keyCode;
    }
    if(keyCode == 40 && this.direction != 38){
        this.incre_x =0;
        this.incre_y= 1;
        this.direction = keyCode;
    }
  }

    eatApple(apple_x,apple_y){
      let last = this.body[this.body.length-1]
      console.log(last)
      return last[0] == apple_x && last[1] == apple_y;

  }
  //Faire grossir le serpent
  grow(isGrow){
      let [x,y] = this.body[this.body.length-1]
      if(isGrow){
        this.body.push([x + this.incre_x,y + this.incre_y]);
      }else{
          this.body.shift([x + this.incre_x,y + this.incre_y])
      }
  }
  // Cette fonction retourne le premier element dont 
  checkCollission(){
      let rest = this.body.slice(0,this.body.length-1) // extraire les quatre premier tableau passer en parametre
      let last = this.body[this.body.length-1] //extraire derenier tableau passer en parametres
      
    
      return rest.find((B) =>{ // 
          return B[0] == last[0] && B[1] == last[1]; // Retourne le premier 
      })
  }
  eatPest(Apple){
    let last = this.body[this.body.length-1];
    return Apple.find((app) => app.x == last[0] && app.y == last[1])
  }
  
}


class Apple{
    constructor(x,y, pest){
      this.x = x;
      this.y = y;
      this.widthSquare = 20;
      this.heightSquare = 20;
      this.pest = pest;
      this.isSuper = false;
    }

    drawn(context){
        let rayon = this.isSuper ? this.widthSquare : this.widthSquare/2
        context.beginPath() //Demarre un nouveau chemin en vidant le precedant chemin (facile la création de dessin en créant de nouveau champ)
        context.arc(this.x * this.widthSquare+rayon,this.y * this.heightSquare+rayon,rayon,0,Math.PI*2,false) //Permet dessiner un cercle 
        
        context.fillStyle = this.pest ? "purple" : "red"

        context.fill()
      }

      change_position(snake_body,apples,canvasHeight,canvasWidth){
        let max_x = Math.floor(canvasWidth / this.widthSquare) -1;
        let max_y = Math.floor(canvasHeight / this.heightSquare) -1;
        let x = 0;
        let y = 0;
        do{

          x = Math.floor(Math.random() * max_x);
          y = Math.floor(Math.random() * max_y);
         
         
        }while(snake_body.find((B) => { return B[0] == x && B[1] == y; }) || apples.find((ins) => {return ins.x == x && ins.y == y}));
          this.x = x;
          this.y = y;
        }
 }