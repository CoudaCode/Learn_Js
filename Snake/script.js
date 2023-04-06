//SNAKE
let score = document.querySelector('.score')
let count = 0;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d')
const snake = new Snake([[2,3],[3,3],[4,3],[5,3],[6,3]]);
const apple = new Apple(7,5);
const pests = [ new Apple(2,3,true),new Apple(8,3,true), new Apple(10,15,true)]
snake.drawn(context)


window.addEventListener("keyup",function(e){
  snake.change_direction(e.keyCode)
})
let inter = setInterval(()=>{
  if(snake.checkCollission() || snake.body.length == 1){
    clearInterval(inter);
    alert("GAME OVER")
  }
context.clearRect(0,0,canvas.width,canvas.height)


  let isEatPest = snake.eatPest(pests)
  if (isEatPest) {
    count -= 10
    snake.grow(false)
    isEatPest.change_position(snake.body,[...pests,apple],canvas.height,canvas.width)
  }

  let iseatApple = snake.eatApple(apple.x,apple.y)
 if(iseatApple){
    count += 10
    snake.grow(true)
    apple.change_position(snake.body,[...pests,apple],canvas.height,canvas.width)

 }
 apple.drawn(context);  // Dessine la pomme

  pests.forEach(element => { // Dessine les pommes violets
  element.drawn(context)
});
 snake.drawn(context);  // Dessine le serpent


 snake.Move(canvas.width,canvas.height);

 score.innerText = count

},200)
// var canvas = document.querySelector("#canvas");
// var context = canvas.getContext('2d')


// context.beginPath()
// context.strokeStyle = "blue"
// context.moveTo(20,20);
// context.lineTo(200,20);
// context.stroke();


// context.beginPath()
// context.strokeStyle = "green"
// context.moveTo(20,20);
// context.lineTo(120,120);
// context.stroke();








//  const obj = {
//      bonjour : 2,
//      bonsoir : 4,
//      funct : function(nbr){
//        console.log(this.bonjour + nbr)
//}

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

// let Obj = {
//   x:10,
//   y:20,
//   func:function(){
//     console.log(this)
//     return this.x
//   }
// }

// // this.x = 15
// let dira = Obj.func

// console.log(dira())

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

// let Obj = {
//   x: 10,
//   y: 20,
//   myFunc(){
//     console.log(this);
//   },
// };
// let PObj = {
//   log: 10,
//   lp: 20,
// };

// let diara = Obj.myFunc.bind(Obj);
// console.log(diara());
/******************************** Expressions regulières **************************************/
//Expression Regulieres
//Recherche des caractères dans une chaine de caractères donnés

// g : global; i:insanssible à la casse

// recherche un caratere on utilise la methode .test();  Retourne True(s'il existe) ou False(existe pas)
//
// exple :
/* Code */
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /fun/gi; // Change this line
// let result = unRegex.test(exampleStr);

// il retoune vrai
/* fin code */

//  Retourne Plusieurs Elements recherché dans un tableau avec Match

//    let exampleStr = "Let's have fun with Have regular expressions!";
//    let unRegex = /have/gi; // Change this line
//    let result = exampleStr.match(unRegex);

//  retourne --->  ['have','Have']

// Faites correspondre n'importe quoi avec la période générique(on utlise le point).

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /un./; // Change this line
// let result = unRegex.test(exampleStr);

// retourne --->  true

//Utilisez une classe de caractères avec des voyelles ( a, e, i, o, u) dans votre regex vowelRegexpour trouver toutes les voyelles de la chaîne quoteSample.

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line
// let result = quoteSample.match(vowelRegex); // Change this line

//return --> ['e', 'a', 'e', 'o', 'u', 'i', 'e', 'a', 'o', 'e', 'o', 'e', 'I', 'a', 'e', 'o', 'o', 'e', 'i', 'o', 'e', 'o', 'i', 'e', 'i']

// Associez les lettres de l'alphabet

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line

/******************************** Expressions regulières **************************************/

