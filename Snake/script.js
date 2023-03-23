
//SNAKE

// var canvas = document.querySelector('#canvas')

// var bigObj = {
//       widthSquare : 20,
//       heightSquare: 20,
//       x : 1,
//       y:1,
//       direction:39,
//       increX : 1,
//       increY :0,
//       snake : [ [2,3],[3,3],[4,3],[5,3],[6,3]],
//       context : canvas.getContext('2d'),
//       MoveSnacke(){
//         let [x, y] = this.snake[this.snake.length - 1];
//         this.snake.shift()
//         this.snake.push([x+this.increX,y+this.increY])
//       },

//       drown(time){
//         context.clearRect(0,0,canvas.width, canvas.height);
        
//           for (let i = 0; i < time.length; i++) {
//             const [x, y] = time[i]
//             context.fillStyle = "orange"
//             context.fillRect(x*this.widthSquare,y*this.heightSquare, this.widthSquare, this.heightSquare) 
//         }
      
//       }
      

// }

// console.log(canvas)

// console.log(bigObj.snake)

// var context = canvas.getContext('2d')
// context.fillStyle = "yellow";
// context.fillRect(bigObj.x*bigObj.widthSquare, bigObj.y*bigObj.heightSquare, bigObj.widthSquare,bigObj.heightSquare);

/*
  fillRect(x, y, largeur, hauteur)
*/
// function drown(time){
//   context.clearRect(0,0,canvas.width, canvas.height);
  
//     for (let i = 0; i < time.length; i++) {
//       const [x, y] = time[i]
//       context.fillStyle = "orange"
//       context.fillRect(x*bigObj.widthSquare,y*bigObj.heightSquare, bigObj.widthSquare, bigObj.heightSquare) 
//   }

// }

// Par defaut le
// setInterval(()=>{
    
      // snake.shift();
      // snake.push([last[0]+1,last[1]])
      
//       bigObj.MoveSnacke()
//       bigObj.drown(bigObj.snake)
     
// },500)


// bigObj.drown(bigObj.snake)


// function MoveSnacke(){
//   let [x, y] = bigObj.snake[bigObj.snake.length - 1 ];
//   bigObj.snake.shift()
//   bigObj.snake.push([x+bigObj.increX,y+bigObj.increY])
// }


// function changedirection(keyCode){
       
        
//             if (keyCode == 39 && bigObj.direction != 37) {
//                     bigObj.increX = 1 ;
//                     bigObj.increY = 0;
//                     bigObj.direction = keyCode;
//             }
//             if (keyCode == 37 && bigObj.direction != 39){
//                        bigObj.increX = -1;
//                        bigObj.increY = 0;
//                        bigObj.direction = keyCode;

//             }
//             if (keyCode == 38 && bigObj.direction != 40){
//                       bigObj.increX = 0;
//                       bigObj.increY = -1;
//                       bigObj.direction = keyCode;
//             }
//             if (keyCode == 40 && bigObj.direction != 39){
//                       bigObj.increX = 0;
//                       bigObj.increY = 1;
//                       bigObj.direction = keyCode;
//             } 

      
//             bigObj.direction = keyCode;
       

// }

// document.addEventListener('keyup',(e)=>{
//   changedirection(e.keyCode)
// })


// const obj = {
//     bonjour : 2,
//     bonsoir : 4,
//     funct : function(nbr){
//       console.log(this.bonjour + nbr)
//     }

// }
// console.log(this)
// let bonjour = 15;

// let bonsoir = 17;


// console.log(obj.bonjour , bonjour)
// console.log(obj.bonsoir , bonsoir)
// console.log(obj.funct(4))


// /****************  exercices avec les objets JS ********************/
// function data(a,b){
//   return {
//     add:()=> a + b,
//     moin:()=> a - b,
//     multi:()=> a * b,
//     divise:()=> a / b 
//   }
// }

// class Person {
//   constructor(name,surname, age){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//   }
// }

// let Demo = new Person(100,'demo','10')

// console.log(Demo);

// class Person {
//   constructor(props){
//     this.name = props.name;
//     this.lastname = props.lastname;
//   }
//   Dispaly(){
//     return this.name
//   }
//   setName(name){
//       this.name = name
//   }

// }


// const P1 = new Person({
//   name:'diara',
//   lastname : 'madou '
// })
// P1.setName('couda')
// console.log(P1.Dispaly());

// console.log()
// let Demo = new Person(100,'demo','10')

// console.log(Demo);




// Exo personnage

// class PersonJeu{
//   constructor(nom,prnom,pointdeVie){
//     this.name = nom;
//     this.lastname = prnom
//   }
  
//   CHANGEBIE(name){
//       this.pointdeVie = name
//   }
// }


// console.log(data(12,3).add())
// console.log(data(12,4).moin())
// console.log(data(12,5).multi())
// console.log(data(12,9).divise())


let Obj = {
  x:10,
  y:20,
  func:function(){
    console.log(this)
    return this.x
  }
}

// this.x = 15
let dira = Obj.func

console.log(dira())

// console.log(Obj.func())

// function nome(){
//   console.log(this)
//   return this.x
// }
// nome()
// // nome.bind(Obj)

// const diara = Obj.func

// console.log('test',diara())
// console.log(nome())




